import { Component } from '@angular/core';
declare var paypal: any;
@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent {
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
