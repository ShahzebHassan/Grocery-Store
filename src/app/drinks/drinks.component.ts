import { Component } from '@angular/core';
import { Router } from '@angular/router';
declare var paypal: any;
@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrl: './drinks.component.css'
})
export class DrinksComponent {
 
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
