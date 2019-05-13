import { ReactorBlock } from '../reactor-block.model';
import { CoolingReactorBlock } from './cooling-reactor-block.model';
import { ModeratorBlock } from '../moderators/moderator-block.model';

export class MagnesiumBlock extends CoolingReactorBlock {
  name = 'Magnesium';
  character = 'N';
  style = { background: '#fcc' };

  getInvalidMessage(): string { return 'Must touch at least one Reactor Casing and one active moderator block'; }

  calculateActive(...neighbors: ReactorBlock[]): void {
    this.active = neighbors.filter(Boolean).length <= 5
      && neighbors.filter(block => ReactorBlock.blockType(block, ModeratorBlock)).length >= 1;
  }
}
