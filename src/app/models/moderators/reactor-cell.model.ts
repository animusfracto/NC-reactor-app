import { ReactorBlock } from '../reactor-block.model';
import { ModeratorBlock } from './moderator-block.model';

export class ReactorCell extends ReactorBlock {
  name = 'Reactor Cell';
  character = 'C';
  style = { background: '#bbb' };

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

  calculateActive(...neighbors): void {
    this.adjacentModerators = neighbors.filter(block => ReactorBlock.blockType(block, ModeratorBlock)).length;
    this.adjacentCells = neighbors.filter(block => ReactorBlock.blockType(block, ReactorCell)).length;
  }

  checkAdjacency(reactor: ReactorBlock[][][], i: number, j: number, k: number): void {
    if (this.adjacentModerators === 0) {
      return;
    }

    for (let search = 0; search <= 4; search++) {
      if (this.indexOrNull(reactor, i + search, j, k) instanceof ModeratorBlock
        && this.indexOrNull(reactor, i + search + 1, j, k) instanceof ReactorCell) {
        this.adjacentCells += 1;
        break;
      }
    }

    for (let search = 0; search <= 4; search++) {
      if (this.indexOrNull(reactor, i - search, j, k) instanceof ModeratorBlock
        && this.indexOrNull(reactor, i - search - 1, j, k) instanceof ReactorCell) {
        this.adjacentCells += 1;
        break;
      }
    }

    for (let search = 0; search <= 4; search++) {
      if (this.indexOrNull(reactor, i, j + search, k) instanceof ModeratorBlock
        && this.indexOrNull(reactor, i, j + search + 1, k) instanceof ReactorCell) {
        this.adjacentCells += 1;
        break;
      }
    }

    for (let search = 0; search <= 4; search++) {
      if (this.indexOrNull(reactor, i, j - search, k) instanceof ModeratorBlock
        && this.indexOrNull(reactor, i, j - search - 1, k) instanceof ReactorCell) {
        this.adjacentCells += 1;
        break;
      }
    }

    for (let search = 0; search <= 4; search++) {
      if (this.indexOrNull(reactor, i, j, k + search) instanceof ModeratorBlock
        && this.indexOrNull(reactor, i, j, k + search + 1) instanceof ReactorCell) {
        this.adjacentCells += 1;
        break;
      }
    }

    for (let search = 0; search <= 4; search++) {
      if (this.indexOrNull(reactor, i, j, k - search) instanceof ModeratorBlock
        && this.indexOrNull(reactor, i, j, k - search - 1) instanceof ReactorCell) {
        this.adjacentCells += 1;
        break;
      }
    }
  }

  private indexOrNull(reactor: ReactorBlock[][][], i: number, j: number, k: number): ReactorBlock {
    try {
      return reactor[i][j][k];
    } catch (error) {
      if (! (error instanceof TypeError)) {
        console.error(error);
      }
      return null;
    }
  }
}
