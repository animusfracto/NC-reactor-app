import { ReactorBlock } from '../reactor-block.model';
import { ReactorCell } from './reactor-cell.model';

export abstract class ModeratorBlock extends ReactorBlock {
  public getHeating() {
    return this.active ? 0 : 1;
  }

  getInvalidMessage(): string {
    return 'Must be next to a FissionReactor Cell';
  }

  calculateActive(): void {
    this.active = this.getNeighbors().filter(block => ReactorCell.blockType(block, ReactorCell)).length >= 1;
  }
}
