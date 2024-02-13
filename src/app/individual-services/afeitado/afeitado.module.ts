import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AfeitadoPageRoutingModule } from './afeitado-routing.module';

import { AfeitadoPage } from './afeitado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AfeitadoPageRoutingModule
  ],
  declarations: [AfeitadoPage]
})
export class AfeitadoPageModule {}
