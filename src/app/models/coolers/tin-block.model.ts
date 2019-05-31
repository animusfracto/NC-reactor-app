import { ReactorBlock } from '../reactor-block.model';
import { CoolingReactorBlock } from './cooling-reactor-block.model';
import { LapisBlock } from './lapis-block.model';
import { IngredientList } from '../ingredient.model';

export class TinBlock extends CoolingReactorBlock {
  name = 'Tin';
  character = 'T';
  image = 'tin.png';

  readonly ingredients = new IngredientList([
    {
      itemName: 'Tin Ingot',
      itemQuantity: 8
    },
    {
      itemName: 'Empty Cooler',
      itemQuantity: 1
    }
  ]);

  getInvalidMessage(): string { return 'Must be at least between two active Lapis Coolers along the same axis'; }

  calculateActive(): void {
    // console.log(neighbors); TODO
    const neighbors = this.getNeighbors();
    this.active = (ReactorBlock.blockType(neighbors[0], LapisBlock) && ReactorBlock.blockType(neighbors[1], LapisBlock))
      || (ReactorBlock.blockType(neighbors[2], LapisBlock) && ReactorBlock.blockType(neighbors[3], LapisBlock))
      || (ReactorBlock.blockType(neighbors[4], LapisBlock) && ReactorBlock.blockType(neighbors[5], LapisBlock));
  }
}
