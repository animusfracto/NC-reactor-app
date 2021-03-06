import { ReactorBlock } from '../reactor-block.model';
import { CoolingReactorBlock } from './cooling-reactor-block.model';
import { ModeratorBlock } from '../moderators/moderator-block.model';
import { IngredientList } from '../ingredient.model';

export class MagnesiumBlock extends CoolingReactorBlock {
  name = 'Magnesium';
  character = 'N';
  image = 'magnesium.png';

  readonly ingredients = new IngredientList([
    {
      itemName: 'Magnesium Ingot',
      itemQuantity: 8
    },
    {
      itemName: 'Empty Cooler',
      itemQuantity: 1
    }
  ]);

  getInvalidMessage(): string { return 'Must touch at least one Reactor Casing and one active moderator block'; }

  calculateActive(): void {
    const neighbors = this.getNeighbors();
    this.active = neighbors.filter(Boolean).length <= 5
      && neighbors.filter(block => ReactorBlock.blockType(block, ModeratorBlock)).length >= 1;
  }
}
