import { ReactorBlock } from './reactor-block.model';
import { IngredientList } from './ingredient.model';

export class AirBlock extends ReactorBlock {
  name = 'Air';
  character = '0';
  image = 'air.png';
  readonly ingredients: IngredientList = new IngredientList([]);

  active = true;

  getInvalidMessage(): string {
    return 'Block is invalid, something is wrong';
  }

  calculateActive(): void { }
}
