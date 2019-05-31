import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatExpansionModule,
  MatFormFieldModule, MatGridListModule,
  MatInputModule, MatSelectModule,
  MatSidenavModule, MatSortModule, MatTableModule, MatToolbarModule,
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
import { DimensionsComponent } from './sidebar/dimensions/dimensions.component';
import { PaletteComponent } from './sidebar/palette/palette.component';
import { FuelsComponent } from './sidebar/fuels/fuels.component';
import { StatsComponent } from './sidebar/stats/stats.component';
import { MaterialsComponent } from './sidebar/materials/materials.component';

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
    NgLetDirective,
    DimensionsComponent,
    PaletteComponent,
    FuelsComponent,
    StatsComponent,
    MaterialsComponent
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
    MatSelectModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
