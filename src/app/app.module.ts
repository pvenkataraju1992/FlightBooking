import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterairlineComponent } from './registerairline/registerairline.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AddinventoryComponent } from './addinventory/addinventory.component';
import { BookingComponent } from './booking/booking.component';
import { FlightsearchComponent } from './flightsearch/flightsearch.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { BookinghistoryComponent } from './bookinghistory/bookinghistory.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterairlineComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AddinventoryComponent,
    BookingComponent,
    FlightsearchComponent,
    BookinghistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
