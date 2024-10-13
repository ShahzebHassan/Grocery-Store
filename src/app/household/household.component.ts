import { Component } from '@angular/core';
import { Router } from '@angular/router';
declare var paypal: any;

@Component({
  selector: 'app-household',
  templateUrl: './household.component.html',
  styleUrl: './household.component.css'
})

export class HouseholdComponent {
 
  constructor(private router: Router) {}

  navigateAndReload(path: string) {
    this.router.navigate([path]).then(() => {
      window.location.reload();
    });
  }

  ngAfterViewInit(): void {
    
    paypal.minicart.render();
    
  }
}
