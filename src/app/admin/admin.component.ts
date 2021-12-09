import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  email1='';
  password1='';
  constructor(private router:Router) { }

  onlogin()
    {
        if(this.email1 == "prashant" && this.password1 == "1234"){
            this.router.navigate(['/login/dashboard'])
        }
        else
        {
            alert('enter the vaild password')
        }
        
    }
  ngOnInit(): void {
  }

}
