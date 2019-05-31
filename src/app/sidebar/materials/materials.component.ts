import { Component, Input, OnInit } from '@angular/core';
import { FissionReactor } from '../../models/fission-reactor.model';
import { Ingredient } from '../../models/ingredient.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {
  @Input()
  reactor: Observable<FissionReactor>;

  ingredientSource: Observable<Ingredient[]>;
  displayedColumns = ['itemName', 'itemQuantity'];

  constructor() { }

  ngOnInit() {
    this.ingredientSource = this.reactor.pipe(map(data => data.getIngredients().ingredients));
  }
}
