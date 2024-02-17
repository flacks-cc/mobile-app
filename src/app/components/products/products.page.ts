import { Component } from '@angular/core';
import { ProductsDataService } from 'src/app/services/products-data/products-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage {

  constructor(private productsDataService: ProductsDataService) { }

  get productsData(): any[] {
    return this.productsDataService.productsData;
  }

  // Función para generar la ruta de la imagen basada en el nombre del servicio
  generarRutaImg(nombre: string): string {
    const imgNombre = nombre.toLowerCase().replace(/\s+/g, '_') + '.png';
    return `assets/img/items/${imgNombre}`;
  }

}
