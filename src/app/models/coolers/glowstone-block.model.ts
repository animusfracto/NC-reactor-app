import { ReactorBlock } from '../reactor-block.model';
import { CoolingReactorBlock } from './cooling-reactor-block.model';
import { ModeratorBlock } from '../moderators/moderator-block.model';

export class GlowstoneBlock extends CoolingReactorBlock {
  name = 'Glowstone';
  character = 'S';
  style = { background: '#990' };

  getInvalidMessage(): string { return 'Must touch at least two active moderator blocks'; }

  calculateActive(...neighbors: ReactorBlock[]): void {
    this.active = neighbors.filter(block => ReactorBlock.blockType(block, ModeratorBlock)).length >= 2;
  }
}
