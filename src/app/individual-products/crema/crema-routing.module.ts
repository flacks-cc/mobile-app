import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CremaPage } from './crema.page';

const routes: Routes = [
  {
    path: '',
    component: CremaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CremaPageRoutingModule {}
