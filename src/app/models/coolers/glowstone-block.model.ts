import { ReactorBlock } from '../reactor-block.model';
import { CoolingReactorBlock } from './cooling-reactor-block.model';
import { ModeratorBlock } from '../moderators/moderator-block.model';
import { IngredientList } from '../ingredient.model';

export class GlowstoneBlock extends CoolingReactorBlock {
  name = 'Glowstone';
  character = 'S';
  image = 'glowstone.png';

  readonly ingredients = new IngredientList([
    {
      itemName: 'Glowstone Dust',
      itemQuantity: 6
    },
    {
      itemName: 'Glowstone Block',
      itemQuantity: 2
    },
    {
      itemName: 'Empty Cooler',
      itemQuantity: 1
    }
  ]);

  getInvalidMessage(): string { return 'Must touch at least two active moderator blocks'; }

  calculateActive(): void {
    this.active = this.getNeighbors().filter(block => ReactorBlock.blockType(block, ModeratorBlock)).length >= 2;
  }
}
