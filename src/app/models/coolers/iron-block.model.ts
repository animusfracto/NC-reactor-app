import { ReactorBlock } from '../reactor-block.model';
import { CoolingReactorBlock } from './cooling-reactor-block.model';
import { GoldBlock } from './gold-block.model';

export class IronBlock extends CoolingReactorBlock {
  name = 'Iron';
  character = 'F';
  style = { background: '#ddd' };
  image = 'iron.png';

  getInvalidMessage(): string { return 'Must touch at least one active Gold Cooler'; }

  calculateActive(): void {
    this.active = this.getNeighbors().filter(block => ReactorBlock.blockType(block, GoldBlock)).length >= 1;
  }
}
