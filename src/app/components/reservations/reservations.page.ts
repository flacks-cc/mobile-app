import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ShoppingCartDataService } from 'src/app/services/shopping-cart-data/shopping-cart-data.service';
// import * as html2pdf from 'html2pdf.js';

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

  constructor(private router: Router,
     private modalController: ModalController,
     private shoppingCartDataService: ShoppingCartDataService) { }

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
        console.log('Generar comprobante');
      },
    }
  ];

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

  generarPDF() {
    const content = document.getElementById('comprobante'); // Obtener el elemento con el id 'comprobante'
    
    // Configurar las opciones para la generación del PDF
    const options = {
      margin: 1,
      filename: 'comprobante_flacks.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
  
    // Generar el PDF
    // html2pdf().from(content).set(options).save();
  }
  
}

