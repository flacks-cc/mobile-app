import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservationsPageRoutingModule } from './reservations-routing.module';

import { ReservationsPage } from './reservations.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
    declarations: [ReservationsPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ReservationsPageRoutingModule,
        ComponentsModule
    ]
})
export class ReservationsPageModule {}
