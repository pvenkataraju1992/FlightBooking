import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddinventoryService {
  readonly baseURL = environment.apiUrl;

  constructor(private http: HttpClient) { }
  addInventory(data:any):Observable<any>{
    return this.http.post(this.baseURL+'addinventory',data)
  }
  updateIsInventory(airlineId:any):Observable<any>{
    return this.http.get(this.baseURL+'updateisinventory/'+airlineId);
  }
}
