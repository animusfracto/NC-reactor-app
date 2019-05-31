import { ModeratorBlock } from './moderator-block.model';
import { IngredientList } from '../ingredient.model';

class BerylliumBlock extends ModeratorBlock {
  name = 'Beryllium';
  character = 'B';
  image = 'beryllium.png';

  readonly ingredients = new IngredientList([
    {
      itemName: 'Beryllium Ingot',
      itemQuantity: 9
    }
  ]);
}
