import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './COMPONENT/header/header.component';
import { CartComponent } from './COMPONENT/cart/cart.component';
import { ProductComponent } from './COMPONENT/product/product.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './shared/filter.pipe';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddressComponent } from './COMPONENT/address/address.component';
import { DoneComponent } from './COMPONENT/done/done.component';
import { OfferZoneComponent } from './COMPONENT/offer-zone/offer-zone.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { OrdersComponent } from './orders/orders.component';
import { AdminComponent } from './admin/admin.component';
import { Contacts } from './contact/contacts';
import { UserOrderListComponent } from './user-order-list/user-order-list.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentConfirmationComponent } from './payment-confirmation/payment-confirmation.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductComponent,
    FilterPipe,
    LoginComponent,
    RegisterComponent,
    AddressComponent,
    DoneComponent,
    OfferZoneComponent,
    ContactComponent,
    AboutComponent,
    OrdersComponent,
    AdminComponent,
    UserOrderListComponent,
    ForgotPasswordComponent,
    PaymentComponent,
    PaymentConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
