import { Component } from '@angular/core';
import { Router } from '@angular/router';
declare var paypal: any;

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class SingleComponent {

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
