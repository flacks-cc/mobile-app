import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SignUpPageRoutingModule } from './sign-up-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpPage } from './sign-up.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SignUpPageRoutingModule
  ],
  declarations: [SignUpPage]
})
export class SignUpPageModule { }
