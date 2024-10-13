import { Component } from '@angular/core';
import { Router } from '@angular/router';
declare var paypal: any;
@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent {
  
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
