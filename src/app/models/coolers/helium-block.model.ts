import { ReactorBlock } from '../reactor-block.model';
import { RedstoneBlock } from './redstone-block.model';
import { CoolingReactorBlock } from './cooling-reactor-block.model';

export class HeliumBlock extends CoolingReactorBlock {
  name = 'Liquid Helium';
  character = 'H';
  style = { background: '#f44' };
  image = 'helium.png';

  getInvalidMessage(): string { return 'Must touch exactly one active Redstone Cooler and at least one Reactor Casing'; }

  calculateActive(): void {
    const neighbors = this.getNeighbors();
    this.active = neighbors.filter(Boolean).length <= 5
      && neighbors.filter(block => ReactorBlock.blockType(block, RedstoneBlock)).length >= 1;
  }
}
