import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisenosPageRoutingModule } from './disenos-routing.module';

import { DisenosPage } from './disenos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisenosPageRoutingModule
  ],
  declarations: [DisenosPage]
})
export class DisenosPageModule {}
