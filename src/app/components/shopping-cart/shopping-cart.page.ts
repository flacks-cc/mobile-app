import { Component } from '@angular/core';
import { ShoppingCartDataService } from 'src/app/services/shopping-cart-data/shopping-cart-data.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
})
export class ShoppingCartPage {

  constructor(private shoppingCartDataService: ShoppingCartDataService) { }

  get itemsData(): any[] {
    return this.shoppingCartDataService.itemsData;
  }

  eliminarItem(item: any): void {
    this.shoppingCartDataService.removeItem(item);
  }

  // Función para generar la ruta de la imagen basada en el nombre del servicio o producto
  generarRutaImg(nombre: string, item: any): string {
    const imgNombre = item.nombre.toLowerCase().replace(/\s+/g, '_') + '.png';
    const rutaServicio = `assets/img/services/${imgNombre}`;
    const rutaProducto = `assets/img/products/${imgNombre}`;
    
    const imgServicio = new Image();
    imgServicio.src = rutaServicio;
    
    if (imgServicio.complete) {
      return rutaServicio;
    }
    
    const imgProducto = new Image();
    imgProducto.src = rutaProducto;
    
    if (imgProducto.complete) {
      return rutaProducto;
    }
    
    return '';
  }
  
}
