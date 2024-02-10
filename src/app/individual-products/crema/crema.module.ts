import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CremaPageRoutingModule } from './crema-routing.module';

import { CremaPage } from './crema.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CremaPageRoutingModule
  ],
  declarations: [CremaPage]
})
export class CremaPageModule {}
