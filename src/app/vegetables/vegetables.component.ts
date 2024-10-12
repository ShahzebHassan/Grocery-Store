import { Component } from '@angular/core';
declare var paypal: any;

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrl: './vegetables.component.css'
})
export class VegetablesComponent {
  
  ngAfterViewInit(): void {
    paypal.minicart.render();
  }
}
