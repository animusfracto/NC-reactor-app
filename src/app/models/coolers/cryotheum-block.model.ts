import { ReactorBlock } from '../reactor-block.model';
import { ReactorCell } from '../reactor-cell.model';
import { CoolingReactorBlock } from './cooling-reactor-block.model';
import { IngredientList } from '../ingredient.model';

export class CryotheumBlock extends CoolingReactorBlock {
  name = 'Cryotheum';
  character = 'Y';
  image = 'cryotheum.png';

  readonly ingredients = new IngredientList([
    {
      itemName: 'Cryotheum Dust',
      itemQuantity: 8
    },
    {
      itemName: 'EmptyCooler',
      itemQuantity: 1
    }
  ]);

  getInvalidMessage(): string { return 'Must touch at least two Reactor Cells'; }

  calculateActive(): void {
    this.active = this.getNeighbors().filter(block => ReactorBlock.blockType(block, ReactorCell)).length >= 2;
  }
}
