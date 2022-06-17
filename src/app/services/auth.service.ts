import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly baseURL = environment.apiUrl;
  constructor(private http: HttpClient) { }
  login(data:any):Observable<any>{
    return this.http.post(this.baseURL+'userlogin',data);
  }
  register(data:any):Observable<any>{
    return this.http.post(this.baseURL+'userregister',data);
  }
}
