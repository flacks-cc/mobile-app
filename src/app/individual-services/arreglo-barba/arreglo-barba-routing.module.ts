import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArregloBarbaPage } from './arreglo-barba.page';

const routes: Routes = [
  {
    path: '',
    component: ArregloBarbaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArregloBarbaPageRoutingModule {}
