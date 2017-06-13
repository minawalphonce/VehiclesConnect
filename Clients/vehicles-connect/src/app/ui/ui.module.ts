import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AccountDropdownComponent } from './components/account-dropdown/account-dropdown.component';
import { ListComponent } from './components/list/list.component';
import { FiltersComponent } from './components/filters/filters.component';
import { PingComponent } from './pages/ping/ping.component';
import { PingListComponent } from './components/ping-list/ping-list.component';
import { LogsComponent } from './components/logs/logs.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path : '',
    component: LayoutComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'ping', component: PingComponent },
    ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    DashboardComponent,
    ListComponent,
    LayoutComponent,
    HeaderComponent,
    NavbarComponent,
    AccountDropdownComponent,
    FiltersComponent,
    PingComponent,
    PingListComponent,
    LogsComponent
  ],
  exports: [RouterModule]
})
export class UiModule { }
