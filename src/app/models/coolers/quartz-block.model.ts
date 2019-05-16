import { ReactorBlock } from '../reactor-block.model';
import { CoolingReactorBlock } from './cooling-reactor-block.model';
import { ModeratorBlock } from '../moderators/moderator-block.model';

export class QuartzBlock extends CoolingReactorBlock {
  name = 'Quartz';
  character = 'Q';
  style = { background: '#aaa' };
  image = 'quartz.png';

  getInvalidMessage(): string { return 'Must touch at least one active moderator block'; }

  calculateActive(): void {
    this.active = this.getNeighbors().filter(block => ReactorBlock.blockType(block, ModeratorBlock)).length >= 1;
  }
}
