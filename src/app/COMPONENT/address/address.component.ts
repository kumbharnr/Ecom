import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  public grandTotal!:number;
  public getdata:any=[];
  public product:any=[];

  // public service:api;
  constructor(private api:ApiService,private cartService:CartService,private router:Router)  { }


  

  ngOnInit(): void {

    this.cartService.getProducts()
    .subscribe(res=>{
      this.product=res;

    this.grandTotal=this.cartService.getTotalPrice();
    // this.getdata = this.api.getData();
  })

  }
  getData()
  {
  }
  
    //get the data after deleting
    // this.api.getData().subscribe
    // (
    //   (res)=>{
    //     console.log(JSON.stringify(res));
    //     this.getdata = res;
        
        
    //   }
    // )
    // }



}
