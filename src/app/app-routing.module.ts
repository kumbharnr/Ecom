import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './COMPONENT/address/address.component';
import { CartComponent } from './COMPONENT/cart/cart.component';
import { DoneComponent } from './COMPONENT/done/done.component';
import { OfferZoneComponent } from './COMPONENT/offer-zone/offer-zone.component';
import { ProductComponent } from './COMPONENT/product/product.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'product',component:ProductComponent},
  {path:'cart',component:CartComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'address',component:AddressComponent},
  {path:'done',component:DoneComponent},
  {path:'offer',component:OfferZoneComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
