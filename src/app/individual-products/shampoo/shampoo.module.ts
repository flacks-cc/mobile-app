import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShampooPageRoutingModule } from './shampoo-routing.module';

import { ShampooPage } from './shampoo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShampooPageRoutingModule
  ],
  declarations: [ShampooPage]
})
export class ShampooPageModule {}
