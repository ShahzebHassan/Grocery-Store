import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { BreadComponent } from './bread/bread.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FaqsComponent } from './faqs/faqs.component';
import { FrozenComponent } from './frozen/frozen.component';
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
import { DrinksComponent } from './drinks/drinks.component';
import { CartComponent } from './cart/cart.component';
import { HouseholdComponent } from './household/household.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {path:'about',component:AboutComponent},
  {path:'events',component:EventsComponent},
  {path:'bread',component:BreadComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'faqs',component:FaqsComponent},
  {path:'frozen',component:FrozenComponent},
  {path:'household',component:HouseholdComponent},
  {path:'kitchen',component:KitchenComponent},
  {path:'login',component:LoginComponent},
  {path:'mail',component:MailComponent},
  {path:'payment',component:PaymentComponent},
  {path:'pet',component:PetComponent},
  {path:'privacy',component:PrivacyComponent},
  {path:'products',component:ProductsComponent},
  {path:'services',component:ServicesComponent},
  {path:'short-codes',component:ShortCodesComponent},
  {path:'single',component:SingleComponent},
  {path:'drinks',component:DrinksComponent},
  {path:'vegetables',component:VegetablesComponent},
  {path:'cart',component:CartComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
