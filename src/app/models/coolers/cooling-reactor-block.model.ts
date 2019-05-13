import { ReactorBlock } from '../reactor-block.model';
import { DefaultCoolerConfigs } from '../cooler-config.default';

export abstract class CoolingReactorBlock extends ReactorBlock {
  public getCooling(): number {
    if (this.active) {
      return DefaultCoolerConfigs[this.character];
    }
    return 0;
  }

  abstract getInvalidMessage(): string;
}
