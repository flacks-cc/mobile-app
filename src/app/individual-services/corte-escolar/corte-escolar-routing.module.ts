import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorteEscolarPage } from './corte-escolar.page';

const routes: Routes = [
  {
    path: '',
    component: CorteEscolarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorteEscolarPageRoutingModule {}
