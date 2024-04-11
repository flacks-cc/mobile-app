import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingCartPageRoutingModule } from './shopping-cart-routing.module';

import { ShoppingCartPage } from './shopping-cart.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
    declarations: [ShoppingCartPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ShoppingCartPageRoutingModule,
        ComponentsModule
    ]
})
export class ShoppingCartPageModule {}
