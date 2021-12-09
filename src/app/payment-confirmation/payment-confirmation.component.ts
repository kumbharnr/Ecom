import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-payment-confirmation',
  templateUrl: './payment-confirmation.component.html',
  styleUrls: ['./payment-confirmation.component.css']
})
export class PaymentConfirmationComponent implements OnInit {

  public product:any=[];
  public grandTotal!:number;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.product=res;
      //total the added items
      this.grandTotal=this.cartService.getTotalPrice();
  })
  }
  emptyCart(){
    this.cartService.removeAll();
  }

}
