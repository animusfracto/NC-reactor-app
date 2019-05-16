import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ReactorStoreService } from '../service/reactor-store.service';
import { FissionReactor } from '../models/fission-reactor.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  reactor$: Observable<FissionReactor>;

  constructor(private router: Router,
              private reactorStore: ReactorStoreService) { }

  ngOnInit() {
    this.reactor$ = this.reactorStore.getReactor();
  }
}
