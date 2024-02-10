import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesvanecidoPageRoutingModule } from './desvanecido-routing.module';

import { DesvanecidoPage } from './desvanecido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesvanecidoPageRoutingModule
  ],
  declarations: [DesvanecidoPage]
})
export class DesvanecidoPageModule {}
