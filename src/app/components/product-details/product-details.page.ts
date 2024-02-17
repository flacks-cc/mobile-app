import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingCartDataService } from 'src/app/services/shopping-cart-data/shopping-cart-data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  producto: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private shoppingCartDataService: ShoppingCartDataService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.producto = params;
    });
  }

  // Función para generar la ruta de la imagen basada en el nombre del producto
  generarRutaImg(nombre: string): string {
    const imgNombre = nombre.toLowerCase().replace(/\s+/g, '_') + '.png';
    return `assets/img/items/${imgNombre}`;
  }

  // Método para agregar el servicio al carrito de compras
  agregarAlCarrito() {
    if (this.producto) {
      this.shoppingCartDataService.addItem(this.producto);
      this.router.navigateByUrl('/shopping-cart');
    }
  }
}
