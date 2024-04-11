import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  redirectToShoppingCart() {
    // Realiza la acción deseada, como redirigir a otra página
    this.router.navigate(['/shopping-cart']);
  }

  redirectToConfiguration() {
    // Realiza la acción deseada, como redirigir a otra página
    this.router.navigate(['/configuration']);
  }

  redirectToEditProfileCart() {
    // Realiza la acción deseada, como redirigir a otra página
    this.router.navigate(['/edit-profile']);
  }
}