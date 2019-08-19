import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatExpansionModule,
  MatFormFieldModule, MatGridListModule,
  MatInputModule, MatSelectModule,
  MatSidenavModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FissionReactorComponent } from './fission/fission-reactor/fission-reactor.component';
import { SidebarComponent } from './fission/sidebar/sidebar.component';
import { FissionBlockComponent } from './fission/fission-block/fission-block.component';
import { DesignerComponent } from './fission/designer/designer.component';
import { NgLetDirective } from './directives/ng-let.directive';
import { DimensionsComponent } from './fission/sidebar/dimensions/dimensions.component';
import { PaletteComponent } from './fission/sidebar/palette/palette.component';
import { FuelsComponent } from './fission/sidebar/fuels/fuels.component';
import { StatsComponent } from './fission/sidebar/stats/stats.component';
import { MaterialsComponent } from './fission/sidebar/materials/materials.component';
import { StelleratorComponent } from './fusion/stellerator/stellerator.component';
import { AboutComponent } from './about/about.component';

const ROUTES: Routes = [
  {
    path: 'fission',
    component: DesignerComponent
  },
  {
    path: 'fusion',
    component: StelleratorComponent
  },
  {
    path: 'about',
    component: AboutComponent
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
    MaterialsComponent,
    StelleratorComponent,
    AboutComponent
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
    MatSortModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
