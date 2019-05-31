import { ReactorBlock } from '../reactor-block.model';
import { ReactorCell } from '../reactor-cell.model';
import { CoolingReactorBlock } from './cooling-reactor-block.model';
import { ModeratorBlock } from '../moderators/moderator-block.model';
import { IngredientList } from '../ingredient.model';

export class WaterBlock extends CoolingReactorBlock {
  name = 'Water';
  character = 'W';
  image = 'water.png';

  readonly ingredients = new IngredientList([
    {
      itemName: 'Water Bucket',
      itemQuantity: 1
    },
    {
      itemName: 'Empty Cooler',
      itemQuantity: 1
    }
  ]);

  getInvalidMessage(): string { return 'Must touch at least one Reactor Cell or active moderator block'; }

  calculateActive(): void {
    this.active = this.getNeighbors().filter(block => ReactorBlock.blockType(block, ReactorCell)
                                || ReactorBlock.blockType(block, ModeratorBlock)).length >= 1;
  }
}
