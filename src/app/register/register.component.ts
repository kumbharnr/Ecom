import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public signupForm !:FormGroup;

  successMsg:any;
  ErrorMSg:any;
  constructor(private formbuilder:FormBuilder ,private http:HttpClient,private router:Router,private apiser:ApiService) { }

  ngOnInit(): void {
    // this.signupForm=this.formbuilder.group({
    //   fullname:[''],
    //   email:['',Validators.required],
    //   password:['',Validators.required],
    //   mobile:['']
    // })
   this.signupForm = new FormGroup({
      'fullname':new FormControl('',Validators.required),
      'email':new FormControl('',Validators.required),
      'password':new FormControl('',Validators.required),
      'mobile':new FormControl('',Validators.required)
      
    });
  }
  urls = "http://localhost:8000/register";
  signUp()
  {
    this.http.post<any>(this.urls,this.signupForm.value)
    .subscribe(res=>{
      alert("successfull");
      this.signupForm.reset();
      this.router.navigate(['login']);
    },err=>{
      alert("Registration succesful")
      this.router.navigate(['login']);

    })
    }

    register(){
    //   let user ={
    //     fullname:this.signupForm.value,
    //     email:this.signupForm.value
    //   }      
    //   this.apiser.sendEmail("http://localhost:8000/sendEmail",user).subscribe(
    //     data=>{
    //       let res:any=data;
    //       console.log("registered successfully");
          
    //     },err=>{
    //       console.log(err);
          
    //     }
    //   )
    // }
    if(this.signupForm.valid){
      console.log(this.signupForm.value)
      this.apiser.createData(this.signupForm.value).subscribe
      (
        (res)=>{
          console.log(JSON.stringify(res));
          this.signupForm.reset();
          this.successMsg="Record Is Inserted successfully"
          
        }
      )
      
    }
    else{
      this.ErrorMSg="All field required"   ;
      // alert("all field required")   
    }
    
  }

}
