import { ReactorBlock } from '../reactor-block.model';
import { ModeratorBlock } from './moderator-block.model';

export class ReactorCell extends ReactorBlock {
  name = 'Reactor Cell';
  character = 'C';
  style = { background: '#bbb' };
  image = 'cell.png';

  active = true;

  private adjacentCells = 0;
  private adjacentModerators = 0;

  getInvalidMessage(): string {
    return 'Block is invalid, something is wrong';
  }

  getHeating(): number {
    let heating = (this.adjacentCells + 1) * (this.adjacentCells + 2) / 2;
    heating += this.adjacentModerators * (this.adjacentCells + 1) / 3;
    return heating;
  }

  getEfficiency(): number {
    let efficiency = this.adjacentCells + 1;
    efficiency += this.adjacentModerators * efficiency / 6;
    return efficiency;
  }

  calculateActive(): void {
    const neighbors = this.getNeighbors();
    this.adjacentModerators = neighbors.filter(block => ReactorBlock.blockType(block, ModeratorBlock)).length;
    this.adjacentCells = neighbors.filter(block => ReactorBlock.blockType(block, ReactorCell)).length;

    this.checkAdjacency();
  }

  checkAdjacency(): void {
    if (this.adjacentModerators === 0) {
      return;
    }

    for (let search = 0; search <= 4; search++) {
      if (this.reactor.blockAt(this.i + search, this.j, this.k) instanceof ModeratorBlock
        && this.reactor.blockAt(this.i + search + 1, this.j, this.k) instanceof ReactorCell) {
        this.adjacentCells += 1;
        break;
      }
    }

    for (let search = 0; search <= 4; search++) {
      if (this.reactor.blockAt(this.i - search, this.j, this.k) instanceof ModeratorBlock
        && this.reactor.blockAt(this.i - search - 1, this.j, this.k) instanceof ReactorCell) {
        this.adjacentCells += 1;
        break;
      }
    }

    for (let search = 0; search <= 4; search++) {
      if (this.reactor.blockAt(this.i, this.j + search, this.k) instanceof ModeratorBlock
        && this.reactor.blockAt(this.i, this.j + search + 1, this.k) instanceof ReactorCell) {
        this.adjacentCells += 1;
        break;
      }
    }

    for (let search = 0; search <= 4; search++) {
      if (this.reactor.blockAt(this.i, this.j - search, this.k) instanceof ModeratorBlock
        && this.reactor.blockAt(this.i, this.j - search - 1, this.k) instanceof ReactorCell) {
        this.adjacentCells += 1;
        break;
      }
    }

    for (let search = 0; search <= 4; search++) {
      if (this.reactor.blockAt(this.i, this.j, this.k + search) instanceof ModeratorBlock
        && this.reactor.blockAt(this.i, this.j, this.k + search + 1) instanceof ReactorCell) {
        this.adjacentCells += 1;
        break;
      }
    }

    for (let search = 0; search <= 4; search++) {
      if (this.reactor.blockAt(this.i, this.j, this.k - search) instanceof ModeratorBlock
        && this.reactor.blockAt(this.i, this.j, this.k - search - 1) instanceof ReactorCell) {
        this.adjacentCells += 1;
        break;
      }
    }
  }
}
