import { Component } from '@angular/core';
declare var paypal: any;
@Component({
  selector: 'app-bread',
  templateUrl: './bread.component.html',
  styleUrl: './bread.component.css'
})
export class BreadComponent {
  
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
