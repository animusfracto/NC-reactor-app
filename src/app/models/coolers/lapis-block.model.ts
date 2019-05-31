import { ReactorBlock } from '../reactor-block.model';
import { CoolingReactorBlock } from './cooling-reactor-block.model';
import { ReactorCell } from '../reactor-cell.model';
import { IngredientList } from '../ingredient.model';

export class LapisBlock extends CoolingReactorBlock {
  name = 'Lapis';
  character = 'L';
  image = 'lapis.png';

  readonly ingredients = new IngredientList([
    {
      itemName: 'Lapis Lazuli',
      itemQuantity: 8
    },
    {
      itemName: 'Empty Cooler',
      itemQuantity: 1
    }
  ]);

  getInvalidMessage(): string { return 'Must touch at least one Reactor Cell and one Reactor Casing'; }

  calculateActive(): void {
    const neighbors = this.getNeighbors();
    this.active = neighbors.filter(Boolean).length <= 5
      && neighbors.filter(block => ReactorBlock.blockType(block, ReactorCell)).length >= 1;
  }
}
