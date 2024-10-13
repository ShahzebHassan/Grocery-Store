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
import { ReloadGuard } from './reload.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [ReloadGuard], data: { reload: true } },
  { path: 'about', component: AboutComponent, canActivate: [ReloadGuard], data: { reload: true } },
  { path: 'events', component: EventsComponent, canActivate: [ReloadGuard], data: { reload: true } },
  { path: 'bread', component: BreadComponent, canActivate: [ReloadGuard], data: { reload: true } },
  { path: 'checkout', component: CheckoutComponent, canActivate: [ReloadGuard], data: { reload: true } },
  { path: 'faqs', component: FaqsComponent, canActivate: [ReloadGuard], data: { reload: true } },
  { path: 'frozen', component: FrozenComponent, canActivate: [ReloadGuard], data: { reload: true } },
  { path: 'household', component: HouseholdComponent, canActivate: [ReloadGuard], data: { reload: true } },
  { path: 'kitchen', component: KitchenComponent, canActivate: [ReloadGuard], data: { reload: true } },
  { path: 'login', component: LoginComponent, canActivate: [ReloadGuard], data: { reload: true } },
  { path: 'mail', component: MailComponent, canActivate: [ReloadGuard], data: { reload: true } },
  { path: 'payment', component: PaymentComponent, canActivate: [ReloadGuard], data: { reload: true } },
  { path: 'pet', component: PetComponent, canActivate: [ReloadGuard], data: { reload: true } },
  { path: 'privacy', component: PrivacyComponent, canActivate: [ReloadGuard], data: { reload: true } },
  { path: 'products', component: ProductsComponent, canActivate: [ReloadGuard], data: { reload: true } },
  { path: 'services', component: ServicesComponent, canActivate: [ReloadGuard], data: { reload: true } },
  { path: 'short-codes', component: ShortCodesComponent, canActivate: [ReloadGuard], data: { reload: true } },
  { path: 'single', component: SingleComponent, canActivate: [ReloadGuard], data: { reload: true } },
  { path: 'drinks', component: DrinksComponent, canActivate: [ReloadGuard], data: { reload: true } },
  { path: 'vegetables', component: VegetablesComponent, canActivate: [ReloadGuard], data: { reload: true } },
  { path: 'cart', component: CartComponent, canActivate: [ReloadGuard], data: { reload: true } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
