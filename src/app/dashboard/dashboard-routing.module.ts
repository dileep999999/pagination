import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardModule } from './dashboard.component.module';
import { LoginGuard } from './login.guard';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        canActivate: [LoginGuard],
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes), DashboardModule],
})
export class DashboardRoutingModule { }
