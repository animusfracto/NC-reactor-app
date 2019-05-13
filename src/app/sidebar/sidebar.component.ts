import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ReactorStoreService } from '../service/reactor-store.service';
import { Dimensions } from '../models/dimensions.model';
import { ReactorBlock} from '../models/reactor-block.model';
import { types } from '../models/ReactorBlockFactory';
import { ReactorStats } from '../models/reactor-stats.model';
import { FissionFuel, fuels } from '../models/fission-fuel.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  readonly blocks: ReactorBlock[] = Object.values(types).map((fn) => fn());
  readonly fuels: FissionFuel[] = fuels;

  showPalette = false;
  selectedFuel: FissionFuel = fuels[0];

  dimensions$: Observable<Dimensions>;
  stats$: Observable<ReactorStats>;

  constructor(private router: Router,
              private reactorStore: ReactorStoreService) { }

  ngOnInit() {
    this.dimensions$ = this.reactorStore.getDimensions();
    this.stats$ = this.reactorStore.getStats();
    this.changeFuel();
  }

  changeFuel(): void {
    this.reactorStore.changeFuel(this.selectedFuel);
  }

  changeBrush(event): void {
    this.reactorStore.brush = event.target.value;
  }

  onRebuild(data): void {
    this.reactorStore.setDimensions(new Dimensions(data.height, data.width, data.length));
    this.showPalette = true;
  }
}
