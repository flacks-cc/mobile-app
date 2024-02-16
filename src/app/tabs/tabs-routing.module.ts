import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../components/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'products',
        loadChildren: () => import('../components/products/products.module').then(m => m.ProductsPageModule)
      },
      {
        path: 'services',
        loadChildren: () => import('../components/services/services.module').then(m => m.ServicesPageModule)
      },
      {
        path: 'reviews',
        loadChildren: () => import('../components/reviews/reviews.module').then(m => m.ReviewsPageModule)
      },
      {
        path: 'history',
        loadChildren: () => import('../components/history/history.module').then(m => m.HistoryPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
