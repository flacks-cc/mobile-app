import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ShoppingCartDataService } from 'src/app/services/shopping-cart-data/shopping-cart-data.service';
import * as html2pdf from 'html2pdf.js'

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.page.html',
  styleUrls: ['./reservations.page.scss'],
})
export class ReservationsPage {
  isModalOpen = false;
  fecha_hora: string | null = null;
  nombre: string | null = null;
  apellidoP: string | null = null;
  apellidoM: string | null = null;
  email: string | null = null;
  telefono: string | null = null;
  showError: boolean = false;
  idTicket: number = 1;
  monto_total: number = 0;
  monto_pagado: number = 0;
  cambio: number = 0;
  metodo_pago: string = 'efectivo';
  nombre_empleado: string = 'Bet-birai Guzmán Juárez';
  nombre_barbero: string = 'Michel Aldahir Reyes Salazar';

  constructor(private router: Router,
    private modalController: ModalController,
    private shoppingCartDataService: ShoppingCartDataService) {

      this.idTicket = 1;

     }

  get itemsData(): any[] {
    return this.shoppingCartDataService.itemsData;
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
    if (isOpen) {
      this.showError = false;
    }
  }

  nextButtonClick(): void {
    const isContactInfoValid = this.checkContactInfo();

    if (isContactInfoValid) {
      this.setOpen(true);
      this.showError = false;
    } else {
      this.showError = true;
    }
  }

  checkContactInfo(): boolean {
    if (!this.nombre || !this.apellidoP || !this.apellidoM || !this.email || !this.telefono) {
      console.log('Por favor, completa toda la información de contacto.');
      return false;
    }
    return true;
  }

  allFieldsFilled(): boolean {
    return Boolean(this.nombre && this.apellidoP && this.apellidoM && this.email && this.telefono);
  }

  public toastButtons = [
    {
      text: 'Generar comprobante',
      
      handler: () => {
        this.generarPDF();
        console.log('Generar comprobante');
      },
    }
  ];

  // Función para generar la ruta de la imagen basada en el nombre del servicio o producto
  generarRutaImg(nombre: string): string {
    const imgNombre = nombre.toLowerCase().replace(/\s+/g, '_') + '.png';
    return `assets/img/items/${imgNombre}`;
  }

  generarPDF() {
    var element = document.getElementById('element-to-print');
    var opt = {
      margin: 2,
      filename: `comprobante_flacks.pdf`, // Usar el idTicket actual en el nombre del archivo
      // image: { type: 'pmg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // New Promise-based usage:
    html2pdf().from(element).set(opt).save();
    this.idTicket++; // Incrementar el idTicket actual
  }

}

