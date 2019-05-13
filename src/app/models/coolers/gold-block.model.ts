import { ReactorBlock } from '../reactor-block.model';
import { WaterBlock } from './water-block.model';
import { RedstoneBlock } from './redstone-block.model';
import { CoolingReactorBlock } from './cooling-reactor-block.model';

export class GoldBlock extends CoolingReactorBlock {
  name = 'Gold';
  character = 'A';
  style = { background: '#fd0' };

  getInvalidMessage(): string { return 'Must touch at least one active Water Cooler and on active Redstone Cooler'; }

  calculateActive(...neighbors: ReactorBlock[]): void {
    this.active = neighbors.filter(block => ReactorBlock.blockType(block, WaterBlock)).length >= 1
      && neighbors.filter(block => ReactorBlock.blockType(block, RedstoneBlock)).length >= 1;
  }
}
