import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  @ViewChild('nombre') nombreInput!: IonInput;
  @ViewChild('apellidos') apellidosInput!: IonInput;
  @ViewChild('username') usernameInput!: IonInput;
  @ViewChild('email') emailInput!: IonInput;
  @ViewChild('telefono') telefonoInput!: IonInput;
  @ViewChild('password') passwordInput!: IonInput;
  @ViewChild('confirmPassword') confirmPasswordInput!: IonInput;

  showError: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  checkPasswordsMatch(): void {
    if (this.nombreInput.value && this.apellidosInput.value && this.usernameInput.value && this.emailInput.value && this.telefonoInput.value && this.passwordInput.value && this.confirmPasswordInput.value) {
      if (this.passwordInput.value !== this.confirmPasswordInput.value) {
        this.showError = true;
      } else {
        this.showError = false;
        this.router.navigate(['/tabs/home']);
      }
    } else {
      this.showError = true;
    }
  }
}
