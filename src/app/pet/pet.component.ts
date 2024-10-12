import { Component } from '@angular/core';
declare var paypal: any;

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrl: './pet.component.css'
})
export class PetComponent {
  
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
