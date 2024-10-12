import { Component } from '@angular/core';
declare var paypal: any;
@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrl: './drinks.component.css'
})
export class DrinksComponent {
  ngAfterViewInit(): void {
    paypal.minicart.render();
  }
}
