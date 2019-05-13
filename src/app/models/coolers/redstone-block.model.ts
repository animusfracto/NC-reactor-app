import { ReactorBlock } from '../reactor-block.model';
import { ReactorCell } from '../moderators/reactor-cell.model';
import { CoolingReactorBlock } from './cooling-reactor-block.model';

export class RedstoneBlock extends CoolingReactorBlock {
  name = 'Redstone';
  character = 'R';
  style = { background: '#922' };

  getInvalidMessage(): string { return 'Must touch at least one Reactor Cell'; }

  calculateActive(...neighbors: ReactorBlock[]): void {
    this.active = neighbors.filter(block => ReactorBlock.blockType(block, ReactorCell)).length >= 1;
  }
}
