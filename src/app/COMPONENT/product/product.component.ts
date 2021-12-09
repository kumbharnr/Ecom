import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  //properties
  public productList:any;
  searchKey:string='';
  public filterCategory:any
  constructor(private api:ApiService,
    private cartservice:CartService) { }

  ngOnInit(): void {
    //get the data from json
    this.api.getProdcut()
    .subscribe(res=>{
      this.productList=res;
      //
      this.filterCategory=res;
      //add quatity and total 
      this.productList.forEach((a:any) => {
        //making category wise routing for clothing electronics
        if(a.category==="women's clothing" || a.category==="men's clothing"){
          a.category="fashion"
        }
        Object.assign(a,{quantity:1,total:a.price});   //assign means what is target and target is a,quantity price
      });
    
    });
    this.cartservice.search.subscribe((val:any)=>{
      this.searchKey=val;
    })
    
  }
  //trigger some method whenever click on add button

  addtocart(item:any)
  {
    this.cartservice.addtoCart(item);//addtoCart is added from cart.service.ts

  }

  //category wise showing the products 
  filter(category:string){
    this.filterCategory=this.productList
    .filter((a:any)=>{
      if(a.category==category || category==''){
        return a;
      }
    })
  }

}
