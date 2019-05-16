import { ReactorBlock } from '../reactor-block.model';
import { CoolingReactorBlock } from './cooling-reactor-block.model';
import { ReactorCell } from '../moderators/reactor-cell.model';

export class LapisBlock extends CoolingReactorBlock {
  name = 'Lapis';
  character = 'L';
  style = { background: '#22a' };
  image = 'lapis.png';

  getInvalidMessage(): string { return 'Must touch at least one Reactor Cell and one Reactor Casing'; }

  calculateActive(): void {
    const neighbors = this.getNeighbors();
    this.active = neighbors.filter(Boolean).length <= 5
      && neighbors.filter(block => ReactorBlock.blockType(block, ReactorCell)).length >= 1;
  }
}
