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
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LeadManagerComponent } from './leadmanager.component';
import { CreateLeadManagerComponent } from './create-lead-manager/create-leadmanager.component';

const routes: Route[] = [
  {
    path: '',
    component: LeadManagerComponent
  }, {
    path: 'create',
    component: CreateLeadManagerComponent
  }
];

@NgModule({
  declarations: [
    LeadManagerComponent,
    CreateLeadManagerComponent
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
  ]
})
export class LeadManagerModule { }