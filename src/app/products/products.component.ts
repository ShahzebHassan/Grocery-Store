import { Component } from '@angular/core';
import { Router } from '@angular/router';
declare var paypal: any;
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

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
