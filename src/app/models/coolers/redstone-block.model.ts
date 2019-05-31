import { ReactorBlock } from '../reactor-block.model';
import { ReactorCell } from '../reactor-cell.model';
import { CoolingReactorBlock } from './cooling-reactor-block.model';
import { IngredientList } from '../ingredient.model';

export class RedstoneBlock extends CoolingReactorBlock {
  name = 'Redstone';
  character = 'R';
  image = 'redstone.png';

  readonly ingredients = new IngredientList([
    {
      itemName: 'Redstone Block',
      itemQuantity: 2
    },
    {
      itemName: 'Empty Cooler',
      itemQuantity: 1
    }
  ]);

  getInvalidMessage(): string { return 'Must touch at least one Reactor Cell'; }

  calculateActive(): void {
    this.active = this.getNeighbors().filter(block => ReactorBlock.blockType(block, ReactorCell)).length >= 1;
  }
}
