import { Component, OnInit } from '@angular/core';
import { ReactorBlock } from '../../models/reactor-block.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ReactorStoreService } from '../../service/reactor-store.service';
import { Dimensions } from '../../models/dimensions.model';
import { FissionReactor } from '../../models/fission-reactor.model';

@Component({
  selector: 'app-fission-reactor',
  templateUrl: './fission-reactor.component.html',
  styleUrls: ['./fission-reactor.component.css']
})
export class FissionReactorComponent implements OnInit {

  reactor$: Observable<FissionReactor>;

  constructor(private route: ActivatedRoute,
              private reactorStore: ReactorStoreService) { }

  ngOnInit() {
    this.reactor$ = this.reactorStore.getReactor();
  }
}
