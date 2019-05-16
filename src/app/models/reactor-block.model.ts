import { FissionReactor } from './fission-reactor.model';

export abstract class ReactorBlock {
  name: string;
  character: string;
  style: { [p: string]: string };
  image: string;

  reactor: FissionReactor;
  i: number;
  j: number;
  k: number;

  active: boolean = null;

  // used for lambdas to check block type in an easier manner
  protected static blockType(block: ReactorBlock, type: typeof ReactorBlock): boolean {
    return block != null && block.active && block instanceof type;
  }

  protected getNeighbors(): ReactorBlock[] {
    return [ this.reactor.blockAt(this.i - 1, this.j, this.k), this.reactor.blockAt(this.i + 1, this.j, this.k),
             this.reactor.blockAt(this.i, this.j - 1, this.k), this.reactor.blockAt(this.i, this.j + 1, this.k),
             this.reactor.blockAt(this.i, this.j, this.k - 1), this.reactor.blockAt(this.i, this.j, this.k + 1) ];
  }

  public toCharacter(): string {
    return this.character;
  }

  public toString(): string {
    return `${this.character}@i=${this.i},j=${this.j},k=${this.k}`;
  }

  public getTooltip(): string {
    let tooltip = this.name;
    if (this.active === false) {
      tooltip += '\n' + this.getInvalidMessage();
    }
    return tooltip;
  }

  abstract getInvalidMessage(): string;
  abstract calculateActive(): void;
}
