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
    OfferZoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
