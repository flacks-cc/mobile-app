import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  // {
  //   path: 'services',
  //   loadChildren: () => import('./services/services.module').then(m => m.ServicesPageModule)
  // },
  // {
  //   path: 'products',
  //   loadChildren: () => import('./products/products.module').then(m => m.ProductsPageModule)
  // },
  // {
  //   path: 'tabs',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'configuration',
    loadChildren: () => import('./components/configuration/configuration.module').then(m => m.ConfigurationPageModule)
  },
  {
    path: 'reviews',
    loadChildren: () => import('./components/reviews/reviews.module').then(m => m.ReviewsPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./components/history/history.module').then(m => m.HistoryPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./components/contact-us/contact-us.module').then(m => m.ContactUsPageModule)
  },
  {
    path: 'find-us',
    loadChildren: () => import('./components/find-us/find-us.module').then(m => m.FindUsPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./components/edit-profile/edit-profile.module').then(m => m.EditProfilePageModule)
  },

  {
    path: 'sign-up',
    loadChildren: () => import('./components/sign-up/sign-up.module').then(m => m.SignUpPageModule)
  },
  {
    path: 'reservations',
    loadChildren: () => import('./components/reservations/reservations.module').then(m => m.ReservationsPageModule)
  },
  {
    path: 'shopping',
    loadChildren: () => import('./components/shopping/shopping.module').then(m => m.ShoppingPageModule)
  },
  {
    path: 'service-details',
    loadChildren: () => import('./components/service-details/service-details.module').then(m => m.ServiceDetailsPageModule)
  },
  {
    path: 'product-details',
    loadChildren: () => import('./components/product-details/product-details.module').then(m => m.ProductDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
