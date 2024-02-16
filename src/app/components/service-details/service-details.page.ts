import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.page.html',
  styleUrls: ['./service-details.page.scss'],
})
export class ServiceDetailsPage implements OnInit {

  servicio: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.servicio = params;
    });
  }

    // Función para generar la ruta de la imagen basada en el nombre del servicio
    generarRutaImg(nombre: string): string {
      const imgNombre = nombre.toLowerCase().replace(/\s+/g, '_') + '.png';
      return `assets/img/services/${imgNombre}`;
    }
}
