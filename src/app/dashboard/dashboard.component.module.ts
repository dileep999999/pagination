import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {  Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
];

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    NgxPaginationModule,
    CommonModule
  ]
})
export class DashboardModule { }
