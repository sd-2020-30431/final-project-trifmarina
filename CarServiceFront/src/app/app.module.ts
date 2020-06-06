import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { ToastrModule } from 'ngx-toastr';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {config} from 'rxjs';
import {UserService} from './services/user.service';
import {ConfigService} from './services/config.service';
import {AuthInterceptor} from './auth/auth.interceptor';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { StatusComponent } from './status/status.component';
import { ColorChangeDirective } from './my-bookings/color-change.directive';
import {FacadeService} from './services/facade.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    MyBookingsComponent,
    StatusComponent,
    ColorChangeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
  ],
  providers: [UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
    ConfigService,
    FacadeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
