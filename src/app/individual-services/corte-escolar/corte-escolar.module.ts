import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorteEscolarPageRoutingModule } from './corte-escolar-routing.module';

import { CorteEscolarPage } from './corte-escolar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorteEscolarPageRoutingModule
  ],
  declarations: [CorteEscolarPage]
})
export class CorteEscolarPageModule {}
