import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesvanecidoPage } from './desvanecido.page';

const routes: Routes = [
  {
    path: '',
    component: DesvanecidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesvanecidoPageRoutingModule {}
