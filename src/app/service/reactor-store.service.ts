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
import { ModeratorBlock } from '../models/moderators/moderator-block.model';
import { ReactorCell } from '../models/moderators/reactor-cell.model';
import { FissionFuel } from '../models/fission-fuel.model';
import { FissionReactor } from '../models/fission-reactor.model';

@Injectable({
  providedIn: 'root'
})
export class ReactorStoreService {
  public static checkOrder: typeof ReactorBlock[] = [ ModeratorBlock, WaterBlock, RedstoneBlock, QuartzBlock, MagnesiumBlock,
    EmeraldBlock, EnderiumBlock, GoldBlock, LapisBlock, GlowstoneBlock, DiamondBlock, CryotheumBlock, TinBlock, HeliumBlock,
    CopperBlock, IronBlock, ReactorCell ];

  private reactor: BehaviorSubject<FissionReactor> = new BehaviorSubject(new FissionReactor(new Dimensions(1, 1, 1), '0'));

  public brush = '0';
  public autoRefresh = true;

  constructor(private route: ActivatedRoute) { }

  // Push a new reactor to all subscribers
  private updateReactor(newReactor: FissionReactor): void {
    console.log(`Updating reactor to ${newReactor}`);
    if (this.autoRefresh) {
      newReactor.checkReactor();
    }
    this.reactor.next(newReactor);
  }

  // Parse a reactor from the URL. Will ignore a reactor string without dimensions.
  // Checked params:
  //   length, width, height -> reactor dimensions
  //   reactor -> reactor string
  public parseReactorFromURL(): void {
    this.route.queryParamMap.subscribe(params => {
      let dims;
      if (params.has('height')) {
        console.log('Dimensions detected in URL');
        dims = new Dimensions(+params.get('height'), +params.get('length'), +params.get('width'));
      }
      if (params.has('reactor')) {
        if (dims) {
          console.log('Reactor detected in URL');
          this.updateReactor(new FissionReactor(dims, params.get('reactor')));
        } else {
          console.log('Reactor detected in URL, but skipping because dimensions were not provided');
        }
      }
      // this.updateReactor(new FissionReactor(dims));
    });
  }

  public getReactor(): Observable<FissionReactor> {
    return this.reactor.asObservable();
  }

  public paintBlock(i: number, j: number, k: number): void {
    const reactor = this.reactor.getValue();
    reactor.setBlock(i, j, k, this.brush);
    this.reactor.next(reactor);
  }

  public setDimensions(newDimensions: Dimensions): void {
    this.updateReactor(new FissionReactor(newDimensions));
  }

  public changeFuel(fuel: FissionFuel): void {
    const reactor = this.reactor.getValue();
    reactor.fuel = fuel;
    this.updateReactor(reactor);
  }
}
