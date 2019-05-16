import { Component, Input, OnInit } from '@angular/core';
import { Dimensions } from '../../models/dimensions.model';
import { ReactorStoreService } from '../../service/reactor-store.service';

@Component({
  selector: 'app-dimensions',
  templateUrl: './dimensions.component.html',
  styleUrls: ['./dimensions.component.css']
})
export class DimensionsComponent implements OnInit {
  @Input()
  dimensions: Dimensions;

  constructor(private reactorStore: ReactorStoreService) { }

  ngOnInit() {
  }

  onRebuild(data): void {
    this.reactorStore.setDimensions(new Dimensions(data.height, data.width, data.length));
  }
}
