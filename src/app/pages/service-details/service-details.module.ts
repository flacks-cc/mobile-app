import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceDetailsPageRoutingModule } from './service-details-routing.module';

import { ServiceDetailsPage } from './service-details.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
    declarations: [ServiceDetailsPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ServiceDetailsPageRoutingModule,
        ComponentsModule
    ]
})
export class ServiceDetailsPageModule {}
