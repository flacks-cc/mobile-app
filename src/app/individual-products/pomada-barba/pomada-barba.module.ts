import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PomadaBarbaPageRoutingModule } from './pomada-barba-routing.module';

import { PomadaBarbaPage } from './pomada-barba.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PomadaBarbaPageRoutingModule
  ],
  declarations: [PomadaBarbaPage]
})
export class PomadaBarbaPageModule {}
