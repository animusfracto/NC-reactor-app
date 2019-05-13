import {Component, Input, OnInit} from '@angular/core';
import {ReactorBlock} from '../../models/reactor-block.model';

@Component({
  selector: 'app-fission-block',
  templateUrl: './fission-block.component.html',
  styleUrls: ['./fission-block.component.css']
})
export class FissionBlockComponent implements OnInit {

  @Input() block: ReactorBlock;
  @Input() style: {[p: string]: string};

  constructor() { }

  ngOnInit() {
  }
}
