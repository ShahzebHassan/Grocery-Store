import { Component } from '@angular/core';
import { Router } from '@angular/router';
declare var paypal: any;

@Component({
  selector: 'app-frozen',
  templateUrl: './frozen.component.html',
  styleUrl: './frozen.component.css'
})
export class FrozenComponent {
 
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
