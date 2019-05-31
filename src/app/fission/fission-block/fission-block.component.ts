import { Component, Input, OnInit } from '@angular/core';

import { ReactorBlock } from '../../models/reactor-block.model';
import { ReactorStoreService } from '../../service/reactor-store.service';
import { CoolingReactorBlock } from '../../models/coolers/cooling-reactor-block.model';

@Component({
  selector: 'app-fission-block',
  templateUrl: './fission-block.component.html',
  styleUrls: ['./fission-block.component.css']
})
export class FissionBlockComponent implements OnInit {
  @Input() block: ReactorBlock;
  @Input() style: {[p: string]: string};
  @Input() scale: number;

  constructor(private reactorStore: ReactorStoreService) { }

  ngOnInit() {
  }

  isActive(): boolean {
    return (this.block instanceof CoolingReactorBlock && this.block.activeCooler);
  }

  getOffsets(): {[p: string]: string} {
    return {
      'top': (this.block.i + this.block.j + this.block.k * (this.block.reactor.dimensions.width + this.block.reactor.dimensions.length))
        * this.scale + 'px',
      'left': (this.block.reactor.dimensions.width - this.block.j + 1 + this.block.i) * this.scale * 2 + 'px'
    };
  }

  getImage() {
    return `assets/${this.scale}/${this.block.image}`;
  }

  blockClicked(): void {
    console.log(`clicked ${this.block}`);
    this.reactorStore.paintBlock(this.block.i, this.block.j, this.block.k);
  }
}
