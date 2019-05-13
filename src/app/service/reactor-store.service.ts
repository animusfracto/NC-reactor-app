import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

import { ReactorBlock } from '../models/reactor-block.model';
import { Dimensions } from '../models/dimensions.model';
import { IronBlock } from '../models/coolers/iron-block.model';
import { DiamondBlock } from '../models/coolers/diamond-block.model';
import { WaterBlock } from '../models/coolers/water-block.model';
import { EmeraldBlock } from '../models/coolers/emerald-block.model';
import { GlowstoneBlock } from '../models/coolers/glowstone-block.model';
import { QuartzBlock } from '../models/coolers/quartz-block.model';
import { EnderiumBlock } from '../models/coolers/enderium-block.model';
import { CopperBlock } from '../models/coolers/copper-block.model';
import { TinBlock } from '../models/coolers/tin-block.model';
import { MagnesiumBlock } from '../models/coolers/magnesium-block.model';
import { HeliumBlock } from '../models/coolers/helium-block.model';
import { LapisBlock } from '../models/coolers/lapis-block.model';
import { CryotheumBlock } from '../models/coolers/cryotheum-block.model';
import { GoldBlock } from '../models/coolers/gold-block.model';
import { RedstoneBlock } from '../models/coolers/redstone-block.model';
import { newBlock } from '../models/ReactorBlockFactory';
import { ModeratorBlock } from '../models/moderators/moderator-block.model';
import { ReactorStats } from '../models/reactor-stats.model';
import { CoolingReactorBlock } from '../models/coolers/cooling-reactor-block.model';
import { ReactorCell } from '../models/moderators/reactor-cell.model';
import { FissionFuel } from '../models/fission-fuel.model';

@Injectable({
  providedIn: 'root'
})
export class ReactorStoreService {
  private static checkOrder: typeof ReactorBlock[] = [ ModeratorBlock, WaterBlock, RedstoneBlock, QuartzBlock, MagnesiumBlock,
    EmeraldBlock, EnderiumBlock, GoldBlock, LapisBlock, GlowstoneBlock, DiamondBlock, CryotheumBlock, TinBlock, HeliumBlock,
    CopperBlock, IronBlock, ReactorCell ];

  // private dimensions: BehaviorSubject<Dimensions> = new BehaviorSubject(new Dimensions(2, 3, 3));
  // private reactor: BehaviorSubject<ReactorBlock[][][]> = new BehaviorSubject(this.parseString('0CGWRQASLDHEYFMUTN'));
  private dimensions: BehaviorSubject<Dimensions> = new BehaviorSubject(new Dimensions(1, 1, 1));
  private reactor: BehaviorSubject<ReactorBlock[][][]> = new BehaviorSubject(this.parseString('0'));
  private stats: BehaviorSubject<ReactorStats> = new BehaviorSubject(new ReactorStats());

  public brush = '0';
  public autoRefresh = true;

  public static isUpper(string: string) {
    return string != null && ! string.match(/^$/) && string === string.toUpperCase();
  }

  constructor(private route: ActivatedRoute) { }

  public bindReactorToURL(): void {
    console.log('Creating reactor from URL');
    this.route.queryParamMap.subscribe(params => {
      if (params.has('height')) {
        console.log('Dimensions detected in URL');
        this.setDimensions(new Dimensions(+params.get('height'), +params.get('length'), +params.get('width')));
      }
      if (params.has('reactor')) {
        console.log('Reactor detected in URL');
        this.updateReactor(this.parseString(params.get('reactor')));
      }
    });
  }

  public getReactor(): Observable<ReactorBlock[][][]> {
    return this.reactor.asObservable();
  }

  public paintBlock(i: number, j: number, k: number): void {
    const blocks = this.reactor.getValue();
    if (blocks[i][j][k].character !== this.brush) {
      blocks[i][j][k] = newBlock(this.brush);
      this.updateReactor(blocks);
    }
  }

  public updateReactor(newReactor: ReactorBlock[][][]): void {
    console.log(`Updating reactor to ${newReactor}`);
    if (this.autoRefresh) {
      this.checkReactor(newReactor);
    }
    this.reactor.next(newReactor);
  }

  public getDimensions(): Observable<Dimensions> {
    return this.dimensions.asObservable();
  }

  public setDimensions(newDims: Dimensions): void {
    console.log(`Updating dimensions to ${newDims}`);
    this.dimensions.next(newDims);
    this.updateReactor(this.parseString('0'.repeat(this.dimensions.getValue().volume())));
  }

  private parseString(string: string): ReactorBlock[][][] {
    const dims = this.dimensions.getValue();
    if (string.length !== dims.volume()) {
      throw Error(`dimensions ${this.dimensions.getValue()} are not valid for string length ${string.length}`);
    }

    console.log(`Parsing string ${string}`);

    const newReactor: ReactorBlock[][][] = [];
    for (let i = 0; i < dims.height; i++) {
      const layer: ReactorBlock[][] = [];
      for (let j = 0; j < dims.width; j++) {
        const row: ReactorBlock[] = [];
        for (let k = 0; k < dims.length; k++) {
          row.push(newBlock(string.charAt(k + dims.length * j + i * dims.width * dims.length)));
        }
        layer.push(row);
      }
      newReactor.push(layer);
    }
    return newReactor;
  }

  public getStats(): Observable<ReactorStats> {
    return this.stats.asObservable();
  }

  public aggregateStats(reactor: ReactorBlock[][][] = null): void {
    if (reactor == null) {
      reactor = this.reactor.getValue();
    }
    const dims = this.dimensions.getValue();

    const stats = new ReactorStats();

    for (let i = 0; i < dims.height; i++) {
      for (let j = 0; j < dims.width; j++) {
        for (let k = 0; k < dims.length; k++) {
          const block = reactor[i][j][k];
          if (block instanceof CoolingReactorBlock) {
            stats.cooling -= block.getCooling();
          } else if (block instanceof ModeratorBlock) {
            stats.heatMultiplier += block.getHeating();
          } else if (block instanceof ReactorCell) {
            block.checkAdjacency(reactor, i, j, k);
            stats.heatMultiplier += block.getHeating();
            stats.efficiency += block.getEfficiency();
            stats.cells += 1;
          }
        }
      }
    }

    stats.setFuel(this.stats.getValue().fuel);
    this.stats.next(stats);
  }

  public checkReactor(reactor: ReactorBlock[][][] = null): void {
    console.log('Checking reactor for validity');
    if (reactor == null) {
      reactor = this.reactor.getValue();
    }

    const dims = this.dimensions.getValue();
    for (const blockType of ReactorStoreService.checkOrder) {
      for (let i = 0; i < dims.height; i++) {
        for (let j = 0; j < dims.width; j++) {
          for (let k = 0; k < dims.length; k++) {
            if (reactor[i][j][k] instanceof blockType) {
              reactor[i][j][k].calculateActive(this.indexOrNull(reactor, i - 1, j, k), this.indexOrNull(reactor, i + 1, j, k),
                                               this.indexOrNull(reactor, i, j - 1, k), this.indexOrNull(reactor, i, j + 1, k),
                                               this.indexOrNull(reactor, i, j, k - 1), this.indexOrNull(reactor, i, j, k + 1));
            }
          }
        }
      }
    }

    this.aggregateStats(reactor);
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

  public changeFuel(fuel: FissionFuel) {
    const stats = this.stats.getValue();
    stats.setFuel(fuel);
    this.stats.next(stats);
  }
}
