import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {catchError, map} from 'rxjs/Operators'
import { Contacts } from '../contact/contacts';
// import { FormsModule } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  URLs= "http://localhost:8000";
  httpOptions = {
    headers :new HttpHeaders({'Content Type':'application/json'})
  };

  ContactForm(formdata:Contacts){
    return this.http.post<Contacts>(this.URLs +'api/contact',formdata,this.httpOptions);

    
  }

  
  getProdcut(){
    var urlss = this.URLs +"/getall"
    return this.http.get(urlss)
    // return this.http.get<any>("http://localhost:8000")
    // .pipe(map((res:any)=>{
    //   return res;
    // }))
  }
  
  createData(data:any):Observable<any>{
    var URL = this.URLs + "/register";
    // return this.http.post(URL,data);
    let header = {'content-type':'application/json'};

    return this.http.post(URL,data,{'headers':header,responseType:'text'});
  }

  update(data:any):Observable<any>{
    var URL = this.URLs + "/updatepass";
    // return this.http.post(URL,data);
    let header = {'content-type':'application/json'};

    return this.http.post(URL,data,{'headers':header,responseType:'text'});
  }
  //get the data
  getData():Observable<any>{
    var URL = this.URLs + "/orderDetails";
    return this.http.get(URL);
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

  sendEmail(url:any,data:any){
    return this.http.post(url,data);
  }

  

}

