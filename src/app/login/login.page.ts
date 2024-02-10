import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup = this.formBuilder.group({
    emailOrPhone: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  get emailOrPhone() {
    return this.loginForm.get('emailOrPhone');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Aquí puedes agregar la lógica para enviar el formulario
      console.log('Formulario válido. Enviar datos...');
    } else {
      alert('Por favor, verifica los campos del formulario.');
    }
  }
}
