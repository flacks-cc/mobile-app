import { Component } from '@angular/core';
import { ServicesDataService } from 'src/app/services/services-data/services-data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage {

  constructor(private servicesDataService: ServicesDataService) { }

  get servicesData(): any[] {
    return this.servicesDataService.servicesData;
  }

  // Función para generar la ruta de la imagen basada en el nombre del servicio
  generarRutaImg(nombre: string): string {
    const imgNombre = nombre.toLowerCase().replace(/\s+/g, '_') + '.png';
    return `assets/img/services/${imgNombre}`;
  }
}
