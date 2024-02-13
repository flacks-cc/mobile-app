import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MascarillaPageRoutingModule } from './mascarilla-routing.module';

import { MascarillaPage } from './mascarilla.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MascarillaPageRoutingModule
  ],
  declarations: [MascarillaPage]
})
export class MascarillaPageModule {}
