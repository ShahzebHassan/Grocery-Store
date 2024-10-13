import { Component } from '@angular/core';
import { Router } from '@angular/router';
declare var paypal: any;
@Component({
  selector: 'app-bread',
  templateUrl: './bread.component.html',
  styleUrl: './bread.component.css'
})
export class BreadComponent {
 
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
