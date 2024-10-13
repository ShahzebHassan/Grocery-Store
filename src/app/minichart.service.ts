// minicart.service.ts
import { Injectable } from '@angular/core';
declare var paypal: any;

@Injectable({
  providedIn: 'root'
})
export class MinicartService {
  initializeMinicart() {
    paypal.minicart.render();
    
    // Use arrow function to preserve 'this' context
    paypal.minicart.cart.on('checkout', (evt: any) => {
      const items = paypal.minicart.cart.items();
      let total = 0;

      items.forEach((item: any) => total += item.get('quantity'));

      if (total < 3) {
        alert('The minimum order quantity is 3. Please add more to your shopping cart before checking out');
        evt.preventDefault();
      }
    });
  }
}
