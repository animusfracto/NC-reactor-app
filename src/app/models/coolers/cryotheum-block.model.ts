import { ReactorBlock } from '../reactor-block.model';
import { ReactorCell } from '../moderators/reactor-cell.model';
import { CoolingReactorBlock } from './cooling-reactor-block.model';

export class CryotheumBlock extends CoolingReactorBlock {
  name = 'Cryotheum';
  character = 'Y';
  style = { background: '#059' };
  image = 'cryotheum.png';

  getInvalidMessage(): string { return 'Must touch at least two Reactor Cells'; }

  calculateActive(): void {
    this.active = this.getNeighbors().filter(block => ReactorBlock.blockType(block, ReactorCell)).length >= 2;
  }
}
