import { CoolingReactorBlock } from './cooling-reactor-block.model';

export class EnderiumBlock extends CoolingReactorBlock {
  name = 'Enderium';
  character = 'E';
  style = { background: '#054' };
  image = 'enderium.png';

  getInvalidMessage(): string { return 'Must touch exactly three Reactor Casings at exactly one vertex'; }

  calculateActive(): void {
    this.active = this.getNeighbors().filter(Boolean).length <= 3;
  }
}
