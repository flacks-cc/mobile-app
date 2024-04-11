import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigurationPageRoutingModule } from './configuration-routing.module';

import { ConfigurationPage } from './configuration.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
    declarations: [ConfigurationPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ConfigurationPageRoutingModule,
        ComponentsModule
    ]
})
export class ConfigurationPageModule {}
