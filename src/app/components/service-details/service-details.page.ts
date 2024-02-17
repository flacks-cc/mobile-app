import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingCartDataService } from 'src/app/services/shopping-cart-data/shopping-cart-data.service';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.page.html',
  styleUrls: ['./service-details.page.scss'],
})
export class ServiceDetailsPage implements OnInit {

  servicio: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private shoppingCartDataService: ShoppingCartDataService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.servicio = params;
    });
  }

  // Función para generar la ruta de la imagen basada en el nombre del servicio
  generarRutaImg(nombre: string): string {
    const imgNombre = nombre.toLowerCase().replace(/\s+/g, '_') + '.png';
    return `assets/img/items/${imgNombre}`;
  }

  // Método para agregar el servicio al carrito de compras
  agregarAlCarrito() {
    if (this.servicio) {
      this.shoppingCartDataService.addItem(this.servicio);
      this.router.navigateByUrl('/shopping-cart');
    }
  }

}
