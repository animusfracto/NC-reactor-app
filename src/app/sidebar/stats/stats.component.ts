import { Component, Input, OnInit } from '@angular/core';
import { ReactorStats } from '../../models/reactor-stats.model';
import { FissionReactor } from '../../models/fission-reactor.model';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  @Input()
  stats: ReactorStats;

  @Input()
  reactor: FissionReactor;

  constructor() { }

  ngOnInit() {
  }

}
