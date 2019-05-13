import { Component, OnInit } from '@angular/core';
import { ReactorStoreService } from '../service/reactor-store.service';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css']
})
export class DesignerComponent implements OnInit {

  constructor(private reactorStore: ReactorStoreService) { }

  ngOnInit() {
    this.reactorStore.bindReactorToURL();
  }
}
