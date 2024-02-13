import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArregloBarbaPageRoutingModule } from './arreglo-barba-routing.module';

import { ArregloBarbaPage } from './arreglo-barba.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArregloBarbaPageRoutingModule
  ],
  declarations: [ArregloBarbaPage]
})
export class ArregloBarbaPageModule {}
