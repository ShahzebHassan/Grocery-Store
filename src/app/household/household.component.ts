import { Component } from '@angular/core';
declare var paypal: any;

@Component({
  selector: 'app-household',
  templateUrl: './household.component.html',
  styleUrl: './household.component.css'
})
export class HouseholdComponent {
 
  ngAfterViewInit(): void {
    paypal.minicart.render();
  }
}
