export class Dimensions {
  height: number;
  width: number;
  length: number;

  constructor(height: number, width: number, length: number) {
    this.height = height;
    this.width = width;
    this.length = length;
  }

  public volume(): number {
    return this.height * this.width * this.length;
  }

  public toString(): string {
    return `[${this.height}, ${this.width}, ${this.length}] (h, w, l)`;
  }
}
