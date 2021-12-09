import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router:Router) { }

  canActivate()
  {
    let bReturn=true;

    if (localStorage.getItem('isLoggedIn')=='false')
      {
        alert("sorry you can't access this page ");
        this.router.navigate(['/login']);
        bReturn=false;
      }
      return bReturn;
  }
}
