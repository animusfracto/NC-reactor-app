import { ReactorBlock } from '../reactor-block.model';
import { RedstoneBlock } from './redstone-block.model';
import { CoolingReactorBlock } from './cooling-reactor-block.model';
import { IngredientList } from '../ingredient.model';

export class HeliumBlock extends CoolingReactorBlock {
  name = 'Liquid Helium';
  character = 'H';
  image = 'helium.png';

  readonly ingredients = new IngredientList([
    {
      itemName: 'Liquid Helium',
      itemQuantity: 1
    },
    {
      itemName: 'Empty Cooler',
      itemQuantity: 1
    }
  ]);

  getInvalidMessage(): string { return 'Must touch exactly one active Redstone Cooler and at least one Reactor Casing'; }

  calculateActive(): void {
    const neighbors = this.getNeighbors();
    this.active = neighbors.filter(Boolean).length <= 5
      && neighbors.filter(block => ReactorBlock.blockType(block, RedstoneBlock)).length >= 1;
  }
}
