import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatExpansionModule,
  MatFormFieldModule, MatGridListModule,
  MatInputModule, MatSelectModule,
  MatSidenavModule, MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FissionReactorComponent } from './fission/fission-reactor/fission-reactor.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FissionBlockComponent } from './fission/fission-block/fission-block.component';
import { DesignerComponent } from './designer/designer.component';
import { NgLetDirective } from './directives/ng-let.directive';

const ROUTES: Routes = [
  {
    path: 'fission',
    component: DesignerComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/fission'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FissionReactorComponent,
    SidebarComponent,
    FissionBlockComponent,
    DesignerComponent,
    NgLetDirective
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatToolbarModule,
    MatTooltipModule,
    RouterModule.forRoot(ROUTES),
    MatFormFieldModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatGridListModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
