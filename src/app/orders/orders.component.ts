import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor( private apiser:ApiService) { }

  readData:any=[];
  ngOnInit(): void {
    this.getData();
  }
  getData()
  {
    //get the data after deleting
    this.apiser.getData().subscribe
    (
      (res)=>{
        console.log(JSON.stringify(res));
        this.readData = res;
        
        
      }
    )
    }

}
