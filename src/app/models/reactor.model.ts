import { ReactorBlock } from './reactor-block.model';
import { ReactorStats } from './reactor-stats.model';
import { Dimensions } from './dimensions.model';
import { CoolingReactorBlock } from './coolers/cooling-reactor-block.model';
import { ModeratorBlock } from './moderators/moderator-block.model';
import { ReactorCell } from './moderators/reactor-cell.model';
import { FissionFuel } from './fission-fuel.model';

export class Reactor {
  dimensions: Dimensions;
  blocks: ReactorBlock[][][];
  stats: ReactorStats;
  fuel: FissionFuel;

  // Get the block at the coordinates specified
  public blockAt(i: number, j: number, k: number): ReactorBlock {
    try {
      return this.blocks[i][j][k];
    } catch (e) {
      if (! (e instanceof TypeError)) {
        console.log(e);
      }
      return null;
    }
  }

  public aggregateStats(reactor: ReactorBlock[][][] = null): void {
    this.stats = new ReactorStats();

    for (let i = 0; i < this.dimensions.height; i++) {
      for (let j = 0; j < this.dimensions.width; j++) {
        for (let k = 0; k < this.dimensions.length; k++) {
          const block = reactor[i][j][k];
          if (block instanceof CoolingReactorBlock) {
            this.stats.cooling -= block.getCooling();
          } else if (block instanceof ModeratorBlock) {
            this.stats.heatMultiplier += block.getHeating();
          } else if (block instanceof ReactorCell) {
            block.checkAdjacency(reactor, i, j, k);
            this.stats.heatMultiplier += block.getHeating();
            this.stats.efficiency += block.getEfficiency();
            this.stats.cells += 1;
          }
        }
      }
    }
  }

  // Time to meltdown in seconds
  public timeToMeltdown(volume): number {
    return volume * 25000 / this.stats.netHeat() / 20;
  }
}
