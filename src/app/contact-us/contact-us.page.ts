import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {
  @ViewChild('nombre') nombreInput!: IonInput;
  @ViewChild('apellidos') apellidosInput!: IonInput;
  @ViewChild('email') emailInput!: IonInput;
  @ViewChild('telefono') telefonoInput!: IonInput;
  @ViewChild('mensaje') mensajeInput!: IonInput;

  showError: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  checkFieldsFilled(): void {
    if (
      this.nombreInput.value && this.apellidosInput.value && this.emailInput.value && this.telefonoInput.value && this.mensajeInput.value
    ) {
      this.showError = false;
      this.router.navigate(['/tabs/home']);
    } else {
      this.showError = true;
    }
  }
}
