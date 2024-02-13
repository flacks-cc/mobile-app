import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArregloCejaPage } from './arreglo-ceja.page';

const routes: Routes = [
  {
    path: '',
    component: ArregloCejaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArregloCejaPageRoutingModule {}
