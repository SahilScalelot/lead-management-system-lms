import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FuseConfirmationModule } from '@fuse/services/confirmation';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'app/shared/shared.module';
import { MatSortModule } from '@angular/material/sort';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { AgentComponent } from './agent/agent.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LeadManagerModule } from './leadmanager/leadmanager.module';

const routes: Route[] = [
  {
    path: '',
    redirectTo: 'agents'
  }, {
    path: 'agents',
    component: AgentComponent
  }, {
    path: 'sites',
    loadChildren: () => import('./sites/sites.module').then(m => m.SitesModule)
  }
];

@NgModule({
  declarations: [
    AgentComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    FuseConfirmationModule,
    MatIconModule,

    MatSlideToggleModule,
    SharedModule,
    MatSortModule,
    MatButtonModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatSelectModule,
    MatCheckboxModule,

    LeadManagerModule
  ]
})
export class AdminModule { }