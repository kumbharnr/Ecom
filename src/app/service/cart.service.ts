import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList:any=[];
  public productList=new BehaviorSubject<any>([]); //its act as observable and subscribe whatever data emited
  public search = new BehaviorSubject<string>("");
  constructor() { }
  getProducts()
  {
    //geter method get the data form product list
    return this.productList.asObservable();
  }
  //setter method
  setProduct(product:any){
    //push item in to that whatever is coming
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  //add to card
  addtoCart(product:any)
  {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);//
    this.getTotalPrice();
    console.log(this.cartItemList)

  }
  //for total the cart items price
  getTotalPrice():number{
    let grandTotal=0;
    this.cartItemList.map((a:any)=>{
      grandTotal +=a.total;
    })
    return grandTotal;
  }
  //removing the cart item 
  //index means which one item is remove
  removeCartItem(product:any){
    this.cartItemList.map((a:any,index:any)=>{
      //matching the product id and one item from cart
      if(product.id===a.id){
        this.cartItemList.splice(index,1)
      }
    })
    //removing the item counting from badge 
    this.productList.next(this.cartItemList);
  }
  //remove all the items from cart
  removeAll(){
    this.cartItemList=[]
    this.productList.next(this.cartItemList);
  }

}
