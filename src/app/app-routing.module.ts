import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
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
    path: 'configuration',
    loadChildren: () => import('./configuration/configuration.module').then(m => m.ConfigurationPageModule)
  },
  {
    path: 'reviews',
    loadChildren: () => import('./reviews/reviews.module').then( m => m.ReviewsPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'find-us',
    loadChildren: () => import('./find-us/find-us.module').then( m => m.FindUsPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'desvanecido',
    loadChildren: () => import('./individual-services/desvanecido/desvanecido.module').then( m => m.DesvanecidoPageModule)
  },
  {
    path: 'crema',
    loadChildren: () => import('./individual-products/crema/crema.module').then( m => m.CremaPageModule)
  },
  {
    path: 'reservations',
    loadChildren: () => import('./reservations/reservations.module').then( m => m.ReservationsPageModule)
  },
  {
    path: 'shopping',
    loadChildren: () => import('./shopping/shopping.module').then( m => m.ShoppingPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
