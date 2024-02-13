import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router
import { ModalController } from '@ionic/angular'; // Importa ModalController

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.page.html',
  styleUrls: ['./shopping.page.scss'],
})
export class ShoppingPage implements OnInit {
  isModalOpen = false;
  selectedService: string | null = null;
  selectedDateTime: string | string[] | null | undefined = null;
  nombre: string | null = null;
  apellidos: string | null = null;
  email: string | null = null;
  telefono: string | null = null;
  showError: boolean = false; // Nueva propiedad para rastrear si se debe mostrar el mensaje de error

  constructor(private router: Router, private modalController: ModalController) { } // Inyecta Router y ModalController

  ngOnInit() {
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
    if (isOpen) {
      this.showError = false; // Restablece showError a false cuando se abren los campos del formulario
    }
  }

  nextButtonClick(): void {
    const isServiceSelected = this.checkServiceSelected();
    const isDateTimeSelected = this.checkDateTimeSelected();
    const isContactInfoValid = this.checkContactInfo();

    if (isServiceSelected && isDateTimeSelected && isContactInfoValid) {
      this.setOpen(true); 
      this.showError = false; // No muestra el mensaje de error si todos los campos están llenos
    } else {
      this.showError = true; // Muestra el mensaje de error si algún campo está vacío
    }
  }

  checkServiceSelected(): boolean {
    if (!this.selectedService) {
      console.log('Por favor, selecciona un servicio.');
      return false;
    }
    return true;
  }

  checkDateTimeSelected(): boolean {
    if (!this.selectedDateTime) {
      console.log('Por favor, selecciona una fecha y hora.');
      return false;
    }
    return true;
  }

  checkContactInfo(): boolean {
    if (!this.nombre || !this.apellidos || !this.email || !this.telefono) {
      console.log('Por favor, completa toda la información de contacto.');
      return false;
    }
    return true;
  }

  setResult(ev: any) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }

  allFieldsFilled(): boolean {
    return Boolean(this.selectedService && this.selectedDateTime && this.nombre && this.apellidos && this.email && this.telefono);
  }

  public alertButtons = [
    {
      text: 'No',
      role: 'cancel',
      handler: () => {
        this.router.navigate(['/tabs/services']); // Navega a /tabs/services si la opción es "No"
        this.modalController.dismiss(); // Cierra el modal
        console.log('Alert canceled');
      },
    },
    {
      text: 'Sí',
      role: 'confirm',
      handler: () => {
        this.router.navigate(['/tabs/home']); // Navega a /tabs/home si la opción es "Sí"
        this.modalController.dismiss(); // Cierra el modal
        console.log('Alert confirmed');
      },
    },
  ];
  
}
