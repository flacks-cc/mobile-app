import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {

  private _products_data = [
    {
      nombre: 'Crema para la barba',
      precio: 100,
      marca: 'Imperial',
      descripcion: 'Mantiene hidratado y suave el cabello de tu barba.'
    },
    {
      nombre: 'Pomada para la barba',
      precio: 100,
      marca: 'Imperial',
      descripcion: 'Controla el volumen de tu barba y obtén el estilo que desees.'
    },
    {
      nombre: 'Crema',
      precio: 80,
      marca: 'Concha nácar',
      descripcion: 'Ayuda a que los peinados se mantengan en su lugar y brinda un aspecto voluminoso.'
    },
    {
      nombre: 'Bálsamo para la barba',
      precio: 100,
      marca: 'Don Porfirio',
      descripcion: 'Fortalece tu barba y la mantiene saludable e hidratada.'
    },
    {
      nombre: 'Polvo voluminizador',
      precio: 150,
      marca: '4x4',
      descripcion: 'Absorbe el exceso de grasa del cuero cabelludo.'
    },
    {
      nombre: 'Fibra para el cabello',
      precio: 80,
      marca: 'Toppik',
      descripcion: 'Añade grosor al cabello y lo mantiene firme.'
    },
    {
      nombre: 'Shampoo para la barba',
      precio: 100,
      marca: 'Grave Before Shave',
      descripcion: 'Elimina y previene la suciedad de tu barba.'
    },
    {
      nombre: 'Cera para el cabello',
      precio: 120,
      marca: 'Fisticuffs',
      descripcion: ' Proporciona buena fijación durante todo el día.'
    }
  ];

  get productsData(): any[] {
    return this._products_data;
  }

  constructor() { }
}
