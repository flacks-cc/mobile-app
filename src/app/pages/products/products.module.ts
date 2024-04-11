import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProductsPage } from './products.page';
import { ProductsPageRoutingModule } from './products-routing.module';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
    declarations: [ProductsPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProductsPageRoutingModule,
        ComponentsModule
    ]
})
export class ProductsPageModule {}
