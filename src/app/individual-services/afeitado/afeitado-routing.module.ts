import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AfeitadoPage } from './afeitado.page';

const routes: Routes = [
  {
    path: '',
    component: AfeitadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AfeitadoPageRoutingModule {}
