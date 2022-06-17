import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AirlineregisterService {
  readonly baseURL = environment.apiUrl;

  constructor(private http: HttpClient) { }
  getAllAirlines():Observable<any>{
    return this.http.get(this.baseURL+'allairlines')
  }
  registerAirline(data:any):Observable<any> {
    return this.http.post(this.baseURL+'airlineregister', data);
  }
  removeAirline(airlineId:any):Observable<any>{
    return this.http.delete(this.baseURL+'airlineremove/'+airlineId);
  }
  blockAirline(airlineId:any):Observable<any>{
    return this.http.get(this.baseURL+'airlineblock/'+airlineId);
  }
}
