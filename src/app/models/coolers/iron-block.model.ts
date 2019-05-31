import { ReactorBlock } from '../reactor-block.model';
import { CoolingReactorBlock } from './cooling-reactor-block.model';
import { GoldBlock } from './gold-block.model';
import { IngredientList } from '../ingredient.model';

export class IronBlock extends CoolingReactorBlock {
  name = 'Iron';
  character = 'F';
  image = 'iron.png';

  readonly ingredients = new IngredientList([
    {
      itemName: 'Iron Ingot',
      itemQuantity: 8
    },
    {
      itemName: 'Empty Cooler',
      itemQuantity: 1
    }
  ]);

  getInvalidMessage(): string { return 'Must touch at least one active Gold Cooler'; }

  calculateActive(): void {
    this.active = this.getNeighbors().filter(block => ReactorBlock.blockType(block, GoldBlock)).length >= 1;
  }
}
