import { ReactorBlock } from '../reactor-block.model';
import { CoolingReactorBlock } from './cooling-reactor-block.model';

export class EnderiumBlock extends CoolingReactorBlock {
  name = 'Enderium';
  character = 'E';
  style = { background: '#054' };

  getInvalidMessage(): string { return 'Must touch exactly three Reactor Casings at exactly one vertex'; }

  calculateActive(...neighbors: ReactorBlock[]): void {
    this.active = neighbors.filter(Boolean).length <= 3;
  }
}
