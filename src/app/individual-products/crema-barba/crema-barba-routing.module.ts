import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CremaBarbaPage } from './crema-barba.page';

const routes: Routes = [
  {
    path: '',
    component: CremaBarbaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CremaBarbaPageRoutingModule {}
