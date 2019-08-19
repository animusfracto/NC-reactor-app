import { Component, OnInit } from '@angular/core';
import { FusionFuelCombo, FusionFuels } from '../../models/fusion-fuel.model';

@Component({
  selector: 'app-stellerator',
  templateUrl: './stellerator.component.html',
  styleUrls: ['./stellerator.component.css']
})
export class StelleratorComponent implements OnInit {
  reactorSize: number;
  fuelCombo: FusionFuelCombo;
  fuels = FusionFuels;

  constructor() { }

  ngOnInit() {
  }

}
