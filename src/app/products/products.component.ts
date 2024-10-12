import { Component } from '@angular/core';
declare var paypal: any;
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  
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
