import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login/login.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'services',
    loadChildren: () => import('./pages/services/services.module').then(m => m.ServicesPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'configuration',
    loadChildren: () => import('./pages/configuration/configuration.module').then(m => m.ConfigurationPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'reviews',
    loadChildren: () => import('./pages/reviews/reviews.module').then(m => m.ReviewsPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'history',
    loadChildren: () => import('./pages/history/history.module').then(m => m.HistoryPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./pages/contact-us/contact-us.module').then(m => m.ContactUsPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'find-us',
    loadChildren: () => import('./pages/find-us/find-us.module').then(m => m.FindUsPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then(m => m.EditProfilePageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/sign-up/sign-up.module').then(m => m.SignUpPageModule),
  },
  {
    path: 'reservations',
    loadChildren: () => import('./pages/reservations/reservations.module').then(m => m.ReservationsPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'service-details',
    loadChildren: () => import('./pages/service-details/service-details.module').then(m => m.ServiceDetailsPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'product-details',
    loadChildren: () => import('./pages/product-details/product-details.module').then(m => m.ProductDetailsPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'shopping-cart',
    loadChildren: () => import('./pages/shopping-cart/shopping-cart.module').then(m => m.ShoppingCartPageModule),
    canActivate: [LoginGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
