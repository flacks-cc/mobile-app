import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisenosPage } from './disenos.page';

const routes: Routes = [
  {
    path: '',
    component: DisenosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisenosPageRoutingModule {}
