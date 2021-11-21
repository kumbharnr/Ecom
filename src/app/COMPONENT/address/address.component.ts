import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  public grandTotal!:number;

  constructor(private api:ApiService,private cartService:CartService)  { }

  ngOnInit(): void {
    this.grandTotal=this.cartService.getTotalPrice();
  }

}
