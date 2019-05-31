import { ModeratorBlock } from './moderator-block.model';
import { IngredientList } from '../ingredient.model';

export class GraphiteBlock extends ModeratorBlock {
  name = 'Graphite';
  character = 'G';
  image = 'graphite.png';

  readonly ingredients = new IngredientList([
    {
      itemName: 'Graphite Ingot',
      itemQuantity: 9
    }
  ]);
}
