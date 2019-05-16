import { ReactorBlock } from '../reactor-block.model';
import { GlowstoneBlock } from './glowstone-block.model';
import { CoolingReactorBlock } from './cooling-reactor-block.model';

export class CopperBlock extends CoolingReactorBlock {
  name = 'Copper';
  character = 'U';
  style = { background: '#631' };
  image = 'copper.png';

  getInvalidMessage(): string { return 'Must touch at least one active Glowstone Cooler'; }

  calculateActive(): void {
    this.active = this.getNeighbors().filter(block => ReactorBlock.blockType(block, GlowstoneBlock)).length >= 1;
  }
}
