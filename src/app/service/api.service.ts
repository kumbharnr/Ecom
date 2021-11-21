import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/Operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getProdcut(){
    return this.http.get<any>("http://localhost:3000/Products")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  varIsLoggedIn="isLoggedIn";
  login()
  {
    localStorage.setItem(this.varIsLoggedIn,'true')
  }
  logout()
  {
    localStorage.setItem(this.varIsLoggedIn,'false')
  }
}
