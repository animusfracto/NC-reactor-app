export class Dimensions {
  length: number; // x
  width: number;  // y
  height: number; // z

  constructor(height: number, width: number, length: number) {
    this.height = height;
    this.width = width;
    this.length = length;
  }

  public volume(): number {
    return this.height * this.width * this.length;
  }

  public toString(): string {
    return `[${this.length}, ${this.width}, ${this.height}] (l, w, h)`;
  }
}
