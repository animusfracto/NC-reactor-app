import { ReactorBlock } from '../reactor-block.model';
import { GlowstoneBlock } from './glowstone-block.model';
import { CoolingReactorBlock } from './cooling-reactor-block.model';
import { IngredientList } from '../ingredient.model';

export class CopperBlock extends CoolingReactorBlock {
  name = 'Copper';
  character = 'U';
  image = 'copper.png';

  readonly ingredients = new IngredientList([
    {
      itemName: 'Copper Ingots',
      itemQuantity: 8
    },
    {
      itemName: 'Empty Cooler',
      itemQuantity: 1
    },
  ]);

  getInvalidMessage(): string { return 'Must touch at least one active Glowstone Cooler'; }

  calculateActive(): void {
    this.active = this.getNeighbors().filter(block => ReactorBlock.blockType(block, GlowstoneBlock)).length >= 1;
  }
}
