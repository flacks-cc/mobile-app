import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FibraPage } from './fibra.page';

const routes: Routes = [
  {
    path: '',
    component: FibraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FibraPageRoutingModule {}
