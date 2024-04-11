import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ServicesPage } from './services.page';
import { ServicesPageRoutingModule } from './services-routing.module';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
    declarations: [ServicesPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ServicesPageRoutingModule,
        ComponentsModule
    ]
})
export class ServicesPageModule { }
