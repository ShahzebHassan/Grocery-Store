import { Component } from '@angular/core';
declare var paypal: any;

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class SingleComponent {

  ngAfterViewInit(): void {
    paypal.minicart.render();
  }
}
