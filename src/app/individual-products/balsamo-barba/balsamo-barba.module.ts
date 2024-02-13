import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BalsamoBarbaPageRoutingModule } from './balsamo-barba-routing.module';

import { BalsamoBarbaPage } from './balsamo-barba.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BalsamoBarbaPageRoutingModule
  ],
  declarations: [BalsamoBarbaPage]
})
export class BalsamoBarbaPageModule {}
