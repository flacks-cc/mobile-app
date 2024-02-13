import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArregloCejaPageRoutingModule } from './arreglo-ceja-routing.module';

import { ArregloCejaPage } from './arreglo-ceja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArregloCejaPageRoutingModule
  ],
  declarations: [ArregloCejaPage]
})
export class ArregloCejaPageModule {}
