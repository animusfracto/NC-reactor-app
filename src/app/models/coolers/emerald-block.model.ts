import { ReactorBlock } from '../reactor-block.model';
import { ReactorCell } from '../reactor-cell.model';
import { CoolingReactorBlock } from './cooling-reactor-block.model';
import { ModeratorBlock } from '../moderators/moderator-block.model';
import { IngredientList } from '../ingredient.model';

export class EmeraldBlock extends CoolingReactorBlock {
  name = 'Emerald';
  character = 'M';
  image = 'emerald.png';

  readonly ingredients = new IngredientList([
    {
      itemName: 'Emerald',
      itemQuantity: 8
    },
    {
      itemName: 'Empty Cooler',
      itemQuantity: 1
    }
  ]);

  getInvalidMessage(): string { return 'Must touch at least one active moderator block and one Reactor Cell'; }

  calculateActive(): void {
    const neighbors = this.getNeighbors();
    this.active = neighbors.filter(block => ReactorBlock.blockType(block, ModeratorBlock)).length >= 1
      && neighbors.filter(block => ReactorBlock.blockType(block, ReactorCell)).length >= 1;
  }
}
