import { ReactorBlock } from '../reactor-block.model';
import { CoolingReactorBlock } from './cooling-reactor-block.model';
import { ModeratorBlock } from '../moderators/moderator-block.model';
import { IngredientList } from '../ingredient.model';

export class QuartzBlock extends CoolingReactorBlock {
  name = 'Quartz';
  character = 'Q';
  image = 'quartz.png';

  readonly ingredients = new IngredientList([
    {
      itemName: 'Quartz Block',
      itemQuantity: 2
    },
    {
      itemName: 'Crushed Quartz',
      itemQuantity: 6
    },
    {
      itemName: 'Empty Cooler',
      itemQuantity: 1
    }
  ]);

  getInvalidMessage(): string { return 'Must touch at least one active moderator block'; }

  calculateActive(): void {
    this.active = this.getNeighbors().filter(block => ReactorBlock.blockType(block, ModeratorBlock)).length >= 1;
  }
}
