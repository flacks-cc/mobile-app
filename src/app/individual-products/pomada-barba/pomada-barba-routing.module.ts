import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PomadaBarbaPage } from './pomada-barba.page';

const routes: Routes = [
  {
    path: '',
    component: PomadaBarbaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PomadaBarbaPageRoutingModule {}
