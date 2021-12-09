import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  public grandTotal!:number;

  constructor(private apis:ApiService,private cartService:CartService) { }

  ngOnInit(): void {

    
    this.grandTotal=this.cartService.getTotalPrice();

    this.invokeStripe();

  }
  

  makepayment(grandTotal:any){

  }

  invokeStripe(){
    if(!window.document.getElementById('stripe-script')){
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = '';
      window.document.body.appendChild(script);
    }
  }

}
