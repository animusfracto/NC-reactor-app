import { Component, Input, OnInit } from '@angular/core';
import { FissionFuel, fuels } from '../../../models/fission-fuel.model';
import { ReactorStoreService } from '../../../service/reactor-store.service';

@Component({
  selector: 'app-fuels',
  templateUrl: './fuels.component.html',
  styleUrls: ['./fuels.component.css']
})
export class FuelsComponent implements OnInit {
  readonly fuels: FissionFuel[] = fuels;
  @Input()
  fuel: FissionFuel;

  constructor(private reactorStore: ReactorStoreService) { }

  ngOnInit() {
  }

  changeFuel() {
    this.reactorStore.changeFuel(this.fuel);
  }
}
