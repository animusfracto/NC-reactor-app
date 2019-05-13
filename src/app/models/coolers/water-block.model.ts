import { ReactorBlock } from '../reactor-block.model';
import { ReactorCell } from '../moderators/reactor-cell.model';
import { CoolingReactorBlock } from './cooling-reactor-block.model';
import { ModeratorBlock } from '../moderators/moderator-block.model';

export class WaterBlock extends CoolingReactorBlock {
  name = 'Water';
  character = 'W';
  style = { background: '#00f' };
  image = 'water.png';

  getInvalidMessage(): string { return 'Must touch at least one Reactor Cell or active moderator block'; }

  calculateActive(...neighbors: ReactorBlock[]): void {
    this.active = neighbors.filter(block => ReactorBlock.blockType(block, ReactorCell)
                                || ReactorBlock.blockType(block, ModeratorBlock)).length >= 1;
  }
}
