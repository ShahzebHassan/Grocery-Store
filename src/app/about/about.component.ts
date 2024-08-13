import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  searchQuery: string = '';

  constructor(private router: Router) {}

  onSearchSubmit() {
    if (this.searchQuery) {
      // Handle search logic
      console.log('Search query:', this.searchQuery);
      // Example navigation to a search results page
      this.router.navigate(['/search', this.searchQuery]);
    }
  }

  viewCart() {
    // Logic for viewing cart
    console.log('View cart clicked');
    // Example navigation to the cart page
    this.router.navigate(['/cart']);
  }
}