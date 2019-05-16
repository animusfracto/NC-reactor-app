import { ReactorBlock } from '../reactor-block.model';
import { DefaultCoolerConfigs } from '../cooler-config.default';

export abstract class CoolingReactorBlock extends ReactorBlock {
  activeCooler = false;

  public getCooling(): number {
    if (this.active) {
      const cooling = DefaultCoolerConfigs[this.character];
      if (this.activeCooler) {
        return cooling * 5;
      } else {
        return cooling;
      }
    }
    return 0;
  }

  abstract getInvalidMessage(): string;
}
