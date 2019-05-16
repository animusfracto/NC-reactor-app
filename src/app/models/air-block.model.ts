import { ReactorBlock } from './reactor-block.model';

export class AirBlock extends ReactorBlock {
  name = 'Air';
  character = '0';
  style = {
    background: 'none',
    border: '1px dashed'
  };
  image; // TODO create and add

  active = true;

  getInvalidMessage(): string {
    return 'Block is invalid, something is wrong';
  }

  calculateActive(): void { }
}
