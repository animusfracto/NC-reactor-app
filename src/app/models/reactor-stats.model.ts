import { FissionFuel } from './fission-fuel.model';

export class ReactorStats {
  cells = 0; // # of reactor cells
  cooling = 0; // H/t, will be negative
  efficiency = 0; // *100%
  heatMultiplier = 0; // *100%

  // With fuel
  fuel: FissionFuel;
  heat = 0; // H/t
  power = 0; // RF/t
  burnTime = 0; // mins

  public setFuel(fuel: FissionFuel) {
    if (fuel != null) {
      this.fuel = fuel;
      this.heat = this.heatMultiplier * fuel.baseHeat;
      this.power = this.efficiency * fuel.basePower;
      this.burnTime = fuel.duration / this.cells;
    }
  }

  public netHeat(): number {
    return this.heat + this.cooling;
  }
}
