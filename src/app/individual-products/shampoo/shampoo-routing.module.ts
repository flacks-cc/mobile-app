import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShampooPage } from './shampoo.page';

const routes: Routes = [
  {
    path: '',
    component: ShampooPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShampooPageRoutingModule {}
