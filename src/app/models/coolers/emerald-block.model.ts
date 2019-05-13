import { ReactorBlock } from '../reactor-block.model';
import { ReactorCell } from '../moderators/reactor-cell.model';
import { CoolingReactorBlock } from './cooling-reactor-block.model';
import { ModeratorBlock } from '../moderators/moderator-block.model';

export class EmeraldBlock extends CoolingReactorBlock {
  name = 'Emerald';
  character = 'M';
  style = { background: '#0a0' };

  getInvalidMessage(): string { return 'Must touch at least one active moderator block and one Reactor Cell'; }

  calculateActive(...neighbors: ReactorBlock[]): void {
    this.active = neighbors.filter(block => ReactorBlock.blockType(block, ModeratorBlock)).length >= 1
      && neighbors.filter(block => ReactorBlock.blockType(block, ReactorCell)).length >= 1;
  }
}
