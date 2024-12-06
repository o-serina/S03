// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SummaryComponent } from './summary/summary.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'reports', component: ReportsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Redirect to 'dashboard' as the default route
  { path: '**', redirectTo: 'login' } // Catch-all redirect to 'login' for unmatched paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
