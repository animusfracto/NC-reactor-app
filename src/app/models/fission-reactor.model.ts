import { ReactorBlock } from './reactor-block.model';
import { ReactorStats } from './reactor-stats.model';
import { Dimensions } from './dimensions.model';
import { CoolingReactorBlock } from './coolers/cooling-reactor-block.model';
import { ModeratorBlock } from './moderators/moderator-block.model';
import { ReactorCell } from './reactor-cell.model';
import { FissionFuel } from './fission-fuel.model';
import { ReactorStoreService } from '../service/reactor-store.service';
import { ReactorBlockFactory } from './reactor-block-factory';
import { IngredientList } from './ingredient.model';
import { isUpperCase } from 'tslint/lib/utils';

export class FissionReactor {
  dimensions: Dimensions;
  blocks: ReactorBlock[];
  stats: ReactorStats;
  fuel: FissionFuel;

  constructor(dimensions: Dimensions, reactorString?: string) {
    this.dimensions = dimensions;
    if (reactorString === undefined) {
      this.initializeReactor('0'.repeat(dimensions.volume()));
    } else {
      this.initializeReactor(reactorString);
    }
  }

  public toString() {
    return this.blocks.map(block => block.toCharacter()).join('');
  }

  private initializeReactor(reactorString: string): void {
    console.log(`Parsing string ${reactorString}`);
    if (reactorString.length !== this.dimensions.volume()) {
      throw Error(`dimensions ${this.dimensions} are not valid for string length ${reactorString.length}`);
    }

    const x = this.dimensions.length;
    const y = this.dimensions.width;
    const z = this.dimensions.height;

    this.blocks = [];
    for (let k = 0; k < z; k++) {
      for (let j = 0; j < y; j++) {
        for (let i = 0; i < x; i++) {
          this.blocks.push(this.newBlock(reactorString.charAt(i + x * j + k * y * z), i, j, k));
        }
      }
    }
  }

  // Get the block at the coordinates specified, or null if the coordinates are invalid
  public blockAt(i: number, j: number, k: number): ReactorBlock {
    const index = this.indexOf(i, j, k);
    if (index === -1) {
      return null;
    } else {
      return this.blocks[index];
    }
  }

  private indexOf(i: number, j: number, k: number): number {
    return this.blocks.findIndex((block) => block.i === i && block.j === j && block.k === k);
  }

  public checkReactor(): void {
    console.log('Checking reactor for block validity');

    for (const blockType of ReactorStoreService.checkOrder) {
      for (const block of this.blocks) {
        if (block instanceof blockType) {
          block.calculateActive();
        }
      }
    }

    this.aggregateStats();
  }

  public aggregateStats(): void {
    this.stats = new ReactorStats();

    for (const block of this.blocks) {
      if (block instanceof CoolingReactorBlock) {
        this.stats.cooling -= block.getCooling();
      } else if (block instanceof ModeratorBlock) {
        this.stats.heatMultiplier += block.getHeating();
      } else if (block instanceof ReactorCell) {
        this.stats.heatMultiplier += block.getHeating();
        this.stats.efficiency += block.getEfficiency();
        this.stats.cells += 1;
      }
    }
    this.stats.setFuel(this.fuel);
  }

  public getIngredients(): IngredientList {
    const ingredients = new IngredientList([]);
    for (const block of this.blocks) {
      ingredients.add(block.ingredients);
    }
    return ingredients;
  }

  // Time to meltdown in seconds
  public timeToMeltdown(): number {
    return this.dimensions.volume() * 25000 / this.stats.netHeat() / 20;
  }

  public setBlock(i: number, j: number, k: number, type: string) {
    this.blocks[this.indexOf(i, j, k)] = this.newBlock(type, i, j, k);
    this.checkReactor();
  }

  private newBlock(character: string, i, j, k): ReactorBlock {
    const block = ReactorBlockFactory.newBlock(character);
    block.reactor = this;
    block.i = i;
    block.j = j;
    block.k = k;
    return block;
  }
}
