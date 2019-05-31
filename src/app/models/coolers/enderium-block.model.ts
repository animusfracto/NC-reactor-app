import { CoolingReactorBlock } from './cooling-reactor-block.model';
import { IngredientList } from '../ingredient.model';

export class EnderiumBlock extends CoolingReactorBlock {
  name = 'Enderium';
  character = 'E';
  image = 'enderium.png';

  readonly ingredients = new IngredientList([
    {
      itemName: 'Enderium Ingot',
      itemQuantity: 8
    },
    {
      itemName: 'Empty Cooler',
      itemQuantity: 1
    }
  ]);

  getInvalidMessage(): string { return 'Must touch exactly three Reactor Casings at exactly one vertex'; }

  calculateActive(): void {
    this.active = this.getNeighbors().filter(Boolean).length <= 3;
  }
}
