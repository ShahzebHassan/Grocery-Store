import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items = [
    { id: 1, name: 'Apple', price: 1.2, quantity: 3, image: 'assets/images/apple.jpg' },
    { id: 2, name: 'Banana', price: 0.5, quantity: 6, image: 'assets/images/banana.jpg' },
    { id: 3, name: 'Orange', price: 0.8, quantity: 4, image: 'assets/images/orange.jpg' },
    { id: 4, name: 'Milk', price: 1.5, quantity: 2, image: 'assets/images/milk.jpg' },
    { id: 5, name: 'Bread', price: 2.0, quantity: 1, image: 'assets/images/bread.jpg' }
  ];

  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
