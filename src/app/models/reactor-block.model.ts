import { Reactor } from './reactor.model';

export abstract class ReactorBlock {
  name: string;
  character: string;
  style: { [p: string]: string };
  image: string;

  readonly i: number;
  readonly j: number;
  readonly k: number;

  active: boolean = null;

  static blockType(block: ReactorBlock, type: typeof ReactorBlock): boolean {
    return block != null && block.active && block instanceof type;
  }

  static getNeighbors(reactor: Reactor, i, j, k): ReactorBlock[] {
    return [ reactor.blockAt(i - 1, j, k), reactor.blockAt(i + 1, j, k) ];
  }

  public toString(): string {
    return this.character;
  }

  public getTooltip(): string {
    let tooltip = this.name;
    if (this.active === false) {
      tooltip += '\n' + this.getInvalidMessage();
    }
    return tooltip;
  }

  abstract getInvalidMessage(): string;
  abstract calculateActive(...neighbors: ReactorBlock[]): void;
}
