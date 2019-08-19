export class FusionFuel {
  name: string;
}

export class FusionFuelCombo {
  fuel1: FusionFuel;
  fuel2: FusionFuel;
  basePower: number;
  baseTime: number;
  baseHeat: number;
  idealTemp: number;
}

export const FusionFuels: FusionFuel[] = [
  { name: 'Hydrogen' }
];

export const FusionFuelCombos: FusionFuelCombo[] = [
  { fuel1: FusionFuels[0], fuel2: FusionFuels[0], basePower: 0, baseTime: 0, baseHeat: 0, idealTemp: 0 }
];
