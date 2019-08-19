import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  links = [
    { text: 'Fission', path: '/fission' },
    { text: 'Fusion', path: '/fusion' }
  ];
}
