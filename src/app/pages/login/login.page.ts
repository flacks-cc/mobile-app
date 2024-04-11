import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

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

  showError: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
  }

  get emailOrPhone() {
    return this.loginForm.get('emailOrPhone');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      this.showError = true;
    } else {
      this.router.navigateByUrl('/tabs/home');
    }
  }
}
