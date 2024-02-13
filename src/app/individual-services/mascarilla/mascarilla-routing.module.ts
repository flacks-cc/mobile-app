import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MascarillaPage } from './mascarilla.page';

const routes: Routes = [
  {
    path: '',
    component: MascarillaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MascarillaPageRoutingModule {}
