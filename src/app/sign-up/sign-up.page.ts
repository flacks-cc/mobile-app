import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
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
        this.router.navigate(['/login']);
      }
    } else {
      this.showError = true;
    }
  }

  // onSubmit(form: NgForm) {
  //   if (!form.valid) {
  //     this.showError = true;
  //   } else {
  //     this.router.navigateByUrl('/tabs/home');
  //   }
  // }
}
