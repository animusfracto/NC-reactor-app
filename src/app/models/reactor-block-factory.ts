import { AirBlock } from './air-block.model';
import { ReactorCell } from './moderators/reactor-cell.model';
import { GraphiteBlock } from './moderators/graphite-block.model';
import { WaterBlock } from './coolers/water-block.model';
import { RedstoneBlock } from './coolers/redstone-block.model';
import { QuartzBlock } from './coolers/quartz-block.model';
import { GoldBlock } from './coolers/gold-block.model';
import { GlowstoneBlock } from './coolers/glowstone-block.model';
import { LapisBlock } from './coolers/lapis-block.model';
import { DiamondBlock } from './coolers/diamond-block.model';
import { HeliumBlock } from './coolers/helium-block.model';
import { EnderiumBlock } from './coolers/enderium-block.model';
import { CryotheumBlock } from './coolers/cryotheum-block.model';
import { IronBlock } from './coolers/iron-block.model';
import { EmeraldBlock } from './coolers/emerald-block.model';
import { CopperBlock } from './coolers/copper-block.model';
import { TinBlock } from './coolers/tin-block.model';
import { MagnesiumBlock } from './coolers/magnesium-block.model';
import { ReactorBlock } from './reactor-block.model';
import { isUpperCase } from 'tslint/lib/utils';
import { CoolingReactorBlock } from './coolers/cooling-reactor-block.model';

export class ReactorBlockFactory {
  static types: { [p: string]: () => ReactorBlock } = {
    '0': () => new AirBlock(),
    'C': () => new ReactorCell(),
    'G': () => new GraphiteBlock(),
    'W': () => new WaterBlock(),
    'R': () => new RedstoneBlock(),
    'Q': () => new QuartzBlock(),
    'A': () => new GoldBlock(),
    'S': () => new GlowstoneBlock(),
    'L': () => new LapisBlock(),
    'D': () => new DiamondBlock(),
    'H': () => new HeliumBlock(),
    'E': () => new EnderiumBlock(),
    'Y': () => new CryotheumBlock(),
    'F': () => new IronBlock(),
    'M': () => new EmeraldBlock(),
    'U': () => new CopperBlock(),
    'T': () => new TinBlock(),
    'N': () => new MagnesiumBlock(),
  };

  public static newBlock(character: string): ReactorBlock {
    const block = this.types[character];
    if (block != null) {
      const blockObject = block();
      if (isUpperCase(character) && blockObject instanceof CoolingReactorBlock) {
        blockObject.activeCooler = true;
      }
      return blockObject;
    } else {
      console.error(`Couldn't find block type with character '${character}'`);
    }
  }
}
