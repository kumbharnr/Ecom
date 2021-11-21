import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public product:any=[];
  public grandTotal!:number;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    //adding the items into carts
    this.cartService.getProducts()
    .subscribe(res=>{
      this.product=res;
      //total the added items
      this.grandTotal=this.cartService.getTotalPrice();
    })

  }

  //removing item from cart one by one
  removeItem(item:any)
  {
    this.cartService.removeCartItem(item);
  }

  emptyCart(){
    this.cartService.removeAll();
  }
}
