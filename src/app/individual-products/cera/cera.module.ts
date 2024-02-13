import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CeraPageRoutingModule } from './cera-routing.module';

import { CeraPage } from './cera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CeraPageRoutingModule
  ],
  declarations: [CeraPage]
})
export class CeraPageModule {}
