import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.page.html',
  styleUrls: ['./reservations.page.scss'],
})
export class ReservationsPage implements OnInit {
  isModalOpen = false;
  selectedService: string | null = null;
  selectedDateTime: string | string[] | null | undefined = null;
  nombre: string | null = null;
  apellidos: string | null = null;
  email: string | null = null;
  telefono: string | null = null;
  showError: boolean = false;

  constructor(private router: Router, private modalController: ModalController) { }
  ngOnInit() {
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
    if (isOpen) {
      this.showError = false;
    }
  }

  nextButtonClick(): void {
    const isServiceSelected = this.checkServiceSelected();
    const isDateTimeSelected = this.checkDateTimeSelected();
    const isContactInfoValid = this.checkContactInfo();

    if (isServiceSelected && isDateTimeSelected && isContactInfoValid) {
      this.setOpen(true);
      this.showError = false;
    } else {
      this.showError = true;
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
        this.router.navigate(['/tabs/services']);
        this.modalController.dismiss();
        console.log('Alert canceled');
      },
    },
    {
      text: 'Sí',
      role: 'confirm',
      handler: () => {
        this.router.navigate(['/tabs/home']);
        this.modalController.dismiss();
        console.log('Alert confirmed');
      },
    },
  ];

  generarPDF() {
    const doc = new jsPDF.default();
    doc.text('Comprobante de cita', 10, 10);
    doc.save('comprobante_flacks.pdf');
  }

}
