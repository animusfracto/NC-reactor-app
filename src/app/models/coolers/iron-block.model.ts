import { ReactorBlock } from '../reactor-block.model';
import { CoolingReactorBlock } from './cooling-reactor-block.model';
import { GoldBlock } from './gold-block.model';

export class IronBlock extends CoolingReactorBlock {
  name = 'Iron';
  character = 'F';
  style = { background: '#ddd' };

  getInvalidMessage(): string { return 'Must touch at least one active Gold Cooler'; }

  calculateActive(...neighbors: ReactorBlock[]): void {
    this.active = neighbors.filter(block => ReactorBlock.blockType(block, GoldBlock)).length >= 1;
  }
}
