import { AirBlock } from '../air-block.model';
import { GraphiteBlock } from '../moderators/graphite-block.model';
import { QuartzBlock } from './quartz-block.model';

describe('QuartzBlock', () => {
  let block: QuartzBlock;
  let spy: jasmine.Spy;

  beforeEach(() => {
    block = new QuartzBlock();
    spy = spyOn<any>(block, 'getNeighbors');
  });

  afterEach(() => {
    block = null;
  });

  it('should be active when next to one active ModeratorBlock', () => {
    const activeMod = new GraphiteBlock();
    activeMod.active = true;
    spy.and.returnValue([activeMod, new AirBlock(), new AirBlock(),
      new AirBlock(), new AirBlock(), new AirBlock()]);
    block.calculateActive();
    expect(block.active).toBe(true);
  });

  it('should be active when next to more than one active ModeratorBlock', () => {
    const activeMod1 = new GraphiteBlock();
    activeMod1.active = true;
    const activeMod2 = new GraphiteBlock();
    activeMod2.active = true;
    spy.and.returnValue([activeMod1, activeMod2, new AirBlock(),
      new AirBlock(), new AirBlock(), new AirBlock()]);
    block.calculateActive();
    expect(block.active).toBe(true);
  });

  it('should be inactive when next to one inactive ModeratorBlock', () => {
    const activeMod = new GraphiteBlock();
    spy.and.returnValue([activeMod, new AirBlock(), new AirBlock(),
      new AirBlock(), new AirBlock(), new AirBlock()]);
    block.calculateActive();
    expect(block.active).toBe(false);
  });

  it('should be inactive when next to zero ModeratorBlock', () => {
    spy.and.returnValue([new AirBlock(), new AirBlock(), new AirBlock(),
      new AirBlock(), new AirBlock(), new AirBlock()]);
    block.calculateActive();
    expect(block.active).toBe(false);
  });
});
