import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesDataService {

  private _services_data = [
    {
      nombre: 'Corte desvanecido',
      precio: 100,
      duracion: '45 min / 1 hr',
      descripcion: 'Un corte que se caracteriza por tener un aspecto limpio y bien definido'
    },
    {
      nombre: 'Arreglo de barba',
      precio: 150,
      duracion: '30 min',
      descripcion: 'Consiste en recortar, dar forma, limpiar y peinar la barba para lograr una apariencia estilizada.'
    },
    {
      nombre: 'Corte escolar',
      precio: 80,
      duracion: '30 min',
      descripcion: 'El corte ideal para estudiantes o niños. Mantiene el cabello corto. '
    },
    {
      nombre: 'Afeitado express',
      precio: 90,
      duracion: '15 min / 20 min',
      descripcion: 'Se elimina el vello facial de manera rápida y efectiva.'
    },
    {
      nombre: 'Arreglo de ceja',
      precio: 100,
      duracion: '10 min',
      descripcion: 'Elimina el vello no deseado para dar forma y resaltar los rasgos faciales.'
    },
    {
      nombre: 'Mascarilla facial',
      precio: 130,
      duracion: '60 min',
      descripcion: 'Se emplea para hidratar, purificar e iluminar tu cara.'
    },
    {
      nombre: 'Diseños',
      precio: '',
      duracion: '',
      descripcion: 'Contamos con variedad de cortes de pelo y estilos de barba. Puedes consultar con tu barbero el catálogo de cortes.'
    }
  ];

  get servicesData(): any[] {
    return this._services_data;
  }

  constructor() { }
}
