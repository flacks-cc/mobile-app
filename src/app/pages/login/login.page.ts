import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  showError: boolean = false;
  email: string = '';
  password: string = '';
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public loginService: LoginService,
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  // get emailOrPhone() {
  //   return this.loginForm.get('emailOrPhone');
  // }

  // get password() {
  //   return this.loginForm.get('password');
  // }

  ionViewWillEnter() {
    this.loginService.logout();
    console.log("this.logeado = ", this.loginService.logeado);
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      this.showError = true;
    } else {
      this.loginService.login(this.email, this.password);
      this.password = '';
      this.router.navigate(['/home']);
      console.log("this.logeado = ", this.loginService.logeado);
    }
  }

  loginAsInvite() {
    this.loginService.logeado = true;
    this.router.navigate(['/home']);
      console.log("this.logeado = ", this.loginService.logeado);
    }
}
