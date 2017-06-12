import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListComponent } from './pages/list/list.component';
import { DetailsComponent } from './pages/details/details.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AccountDropdownComponent } from './components/account-dropdown/account-dropdown.component';
import { DashboardChartComponent } from './components/dashboard-chart/dashboard-chart.component';
import { DashboardListComponent } from './components/dashboard-list/dashboard-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path : '',
    component: LayoutComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'login', component: LoginComponent },
    ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    DashboardComponent,
    ListComponent,
    DetailsComponent,
    LoginComponent,
    LayoutComponent,
    HeaderComponent,
    NavbarComponent,
    AccountDropdownComponent,
    DashboardChartComponent,
    DashboardListComponent
  ],
  exports: [RouterModule]
})
export class UiModule { }
