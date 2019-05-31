import { ReactorBlock } from '../reactor-block.model';
import { WaterBlock } from './water-block.model';
import { QuartzBlock } from './quartz-block.model';
import { CoolingReactorBlock } from './cooling-reactor-block.model';
import { IngredientList } from '../ingredient.model';

export class DiamondBlock extends CoolingReactorBlock {
  name = 'Diamond';
  character = 'D';
  image = 'diamond.png';

  readonly ingredients = new IngredientList([
    {
      itemName: 'Diamond',
      itemQuantity: 8
    },
    {
      itemName: 'Empty Cooler',
      itemQuantity: 1
    }
  ]);

  getInvalidMessage(): string { return 'Must touch at least one active Water Cooler and one active Quartz Cooler'; }

  calculateActive(): void {
    const neighbors = this.getNeighbors();
    this.active = neighbors.filter(block => ReactorBlock.blockType(block, WaterBlock)).length >= 1
      && neighbors.filter(block => ReactorBlock.blockType(block, QuartzBlock)).length >= 1;
  }
}
