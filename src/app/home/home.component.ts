import { Component } from '@angular/core';
declare var paypal: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  ngAfterViewInit(): void {
    paypal.minicart.render();
  }

  addItemToCart(itemName: string, amount: number) {
    paypal.minicart.cart.add({
      item_name: itemName,
      amount: amount,
      quantity: 1
    });
  }
}
