import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlightsearchService {
  readonly baseURL = environment.apiUrl;

  constructor(private http: HttpClient) { }
  getFlightSearch(data:any):Observable<any>{
    return this.http.post(this.baseURL+'flightsearch',data)
  }
}
