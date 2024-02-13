import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CeraPage } from './cera.page';

const routes: Routes = [
  {
    path: '',
    component: CeraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CeraPageRoutingModule {}
