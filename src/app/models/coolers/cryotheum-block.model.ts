import { ReactorBlock } from '../reactor-block.model';
import { ReactorCell } from '../moderators/reactor-cell.model';
import { CoolingReactorBlock } from './cooling-reactor-block.model';

export class CryotheumBlock extends CoolingReactorBlock {
  name = 'Cryotheum';
  character = 'Y';
  style = { background: '#059' };

  getInvalidMessage(): string { return 'Must touch at least two Reactor Cells'; }

  calculateActive(...neighbors: ReactorBlock[]): void {
    this.active = neighbors.filter(block => ReactorBlock.blockType(block, ReactorCell)).length >= 2;
  }
}
