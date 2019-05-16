import { Component, OnInit } from '@angular/core';
import { ReactorStoreService } from '../../service/reactor-store.service';
import { ReactorBlockFactory } from '../../models/reactor-block-factory';
import { ReactorBlock } from '../../models/reactor-block.model';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.css']
})
export class PaletteComponent implements OnInit {
  readonly blocks: ReactorBlock[] = Object.values(ReactorBlockFactory.types).map((fn) => fn());

  constructor(private reactorStore: ReactorStoreService) { }

  ngOnInit() {
  }

  changeBrush(event): void {
    this.reactorStore.brush = event.target.value;
  }
}
