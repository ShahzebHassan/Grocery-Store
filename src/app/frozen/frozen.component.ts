import { Component } from '@angular/core';
declare var paypal: any;

@Component({
  selector: 'app-frozen',
  templateUrl: './frozen.component.html',
  styleUrl: './frozen.component.css'
})
export class FrozenComponent {
 
  ngAfterViewInit(): void {
    paypal.minicart.render();
  }
}
