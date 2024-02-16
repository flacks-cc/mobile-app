import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  producto: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.producto = params;
    });
  }

    // Función para generar la ruta de la imagen basada en el nombre del producto
    generarRutaImg(nombre: string): string {
      const imgNombre = nombre.toLowerCase().replace(/\s+/g, '_') + '.png';
      return `assets/img/products/${imgNombre}`;
    }
}
