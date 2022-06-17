import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddinventoryComponent } from './addinventory/addinventory.component';
import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { BookinghistoryComponent } from './bookinghistory/bookinghistory.component';
import { FlightsearchComponent } from './flightsearch/flightsearch.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterairlineComponent } from './registerairline/registerairline.component';

const routes: Routes = 
[
  { path: 'home', component: HomeComponent },
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'airlineregister',component:RegisterairlineComponent},
  {path:'inventory',component:AddinventoryComponent},
  {path:'booking',component:BookingComponent},
  {path:'bookinghistory',component:BookinghistoryComponent},
  {path:'flightsearch',component:FlightsearchComponent},
  { path: '', redirectTo: 'home',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
