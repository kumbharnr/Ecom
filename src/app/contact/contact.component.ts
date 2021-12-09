import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Contacts } from './contacts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  model = new Contacts();
  submitted=false;
  error={};

  constructor(private apis:ApiService,
    private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    this.submitted=true;
    return this.apis.ContactForm(this.model).subscribe(
      data=>{

        this.model=data
      
      },error=>{
        this.error=error
      }
    )
  }
  gotoHome(){
    
  }

}
