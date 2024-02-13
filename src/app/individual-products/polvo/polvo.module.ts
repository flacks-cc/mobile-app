import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PolvoPageRoutingModule } from './polvo-routing.module';

import { PolvoPage } from './polvo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolvoPageRoutingModule
  ],
  declarations: [PolvoPage]
})
export class PolvoPageModule {}
