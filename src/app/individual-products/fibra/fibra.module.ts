import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FibraPageRoutingModule } from './fibra-routing.module';

import { FibraPage } from './fibra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FibraPageRoutingModule
  ],
  declarations: [FibraPage]
})
export class FibraPageModule {}
