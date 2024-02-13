import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolvoPage } from './polvo.page';

const routes: Routes = [
  {
    path: '',
    component: PolvoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolvoPageRoutingModule {}
