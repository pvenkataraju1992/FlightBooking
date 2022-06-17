import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Flightsearch } from './models/flightsearch';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private bookingdata = new BehaviorSubject<Flightsearch>(new Flightsearch());
  searchFlightData = this.bookingdata.asObservable()
  constructor() { }
  changeName(data:any) {
    this.bookingdata.next(data);
  }
}