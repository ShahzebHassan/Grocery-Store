import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BreadComponent } from './bread/bread.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DrinksComponent } from './drinks/drinks.component';
import { EventsComponent } from './events/events.component';
import { FaqsComponent } from './faqs/faqs.component';
import { FrozenComponent } from './frozen/frozen.component';
import { HouseholdComponent } from './household/household.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { LoginComponent } from './login/login.component';
import { MailComponent } from './mail/mail.component';
import { PaymentComponent } from './payment/payment.component';
import { PetComponent } from './pet/pet.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { ShortCodesComponent } from './short-codes/short-codes.component';
import { SingleComponent } from './single/single.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BreadComponent,
    CheckoutComponent,
    DrinksComponent,
    EventsComponent,
    FaqsComponent,
    FrozenComponent,
    HouseholdComponent,
    KitchenComponent,
    LoginComponent,
    MailComponent,
    PaymentComponent,
    PetComponent,
    PrivacyComponent,
    ProductsComponent,
    ServicesComponent,
    ShortCodesComponent,
    SingleComponent,
    VegetablesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
