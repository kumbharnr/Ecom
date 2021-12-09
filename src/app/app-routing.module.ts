import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuardService } from './auth-guard.service';
import { AddressComponent } from './COMPONENT/address/address.component';
import { CartComponent } from './COMPONENT/cart/cart.component';
import { DoneComponent } from './COMPONENT/done/done.component';
import { OfferZoneComponent } from './COMPONENT/offer-zone/offer-zone.component';
import { ProductComponent } from './COMPONENT/product/product.component';
import { ContactComponent } from './contact/contact.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { PaymentConfirmationComponent } from './payment-confirmation/payment-confirmation.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'product',component:ProductComponent},
  {path:'cart',component:CartComponent,canActivate:[AuthGuardService]},
  {path:'login',component:LoginComponent,canActivate:[AuthGuardService]},
  {path:'register',component:RegisterComponent},
  {path:'address',component:AddressComponent},
  {path:'done',component:DoneComponent},
  {path:'offer',component:OfferZoneComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'orders',component:OrdersComponent},
  {path:'forgot',component:ForgotPasswordComponent},
  {path:'payment',component:PaymentComponent},
  {path:'paymentConfirmation',component:PaymentConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
