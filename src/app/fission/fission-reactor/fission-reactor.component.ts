import { Component, OnInit } from '@angular/core';
import { ReactorBlock } from '../../models/reactor-block.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ReactorStoreService } from '../../service/reactor-store.service';
import { Dimensions } from '../../models/dimensions.model';

@Component({
  selector: 'app-fission-reactor',
  templateUrl: './fission-reactor.component.html',
  styleUrls: ['./fission-reactor.component.css']
})
export class FissionReactorComponent implements OnInit {

  reactor$: Observable<ReactorBlock[][][]>;
  dimensions$: Observable<Dimensions>;

  constructor(private route: ActivatedRoute,
              private reactorStore: ReactorStoreService) { }

  ngOnInit() {
    this.reactor$ = this.reactorStore.getReactor();
    this.dimensions$ = this.reactorStore.getDimensions();
  }

  blockClick(i, j, k): void {
    console.log(`clicked block at i=${i}, j=${j}, k=${k}`);
    this.reactorStore.paintBlock(i, j, k);
  }
}
