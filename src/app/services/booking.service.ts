import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  readonly baseURL = environment.apiUrl;

  constructor(private http: HttpClient) { }
  getBookingHistory(data:any):Observable<any>{
    return this.http.post(this.baseURL+'bookinghistory',{
      "emailId":data.emailId
  });
  }
  cancelBooking(data:any):Observable<any>{
    return this.http.post(this.baseURL+'cancelticket',{
      "pnrNumber":data
  });
  }
}
