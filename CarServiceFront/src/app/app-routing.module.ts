import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth/auth.guard';
import {MyBookingsComponent} from './my-bookings/my-bookings.component';
import {StatusComponent} from './status/status.component';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
   { path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuard]},
   { path: 'my-bookings', component: MyBookingsComponent},
   { path: 'login', component: LoginComponent},
  {path:'status',component:StatusComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
