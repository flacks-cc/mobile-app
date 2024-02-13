import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
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
    loadChildren: () => import('./configuration/configuration.module').then(m => m.ConfigurationPageModule)
  },
  {
    path: 'reviews',
    loadChildren: () => import('./reviews/reviews.module').then(m => m.ReviewsPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then(m => m.HistoryPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsPageModule)
  },
  {
    path: 'find-us',
    loadChildren: () => import('./find-us/find-us.module').then(m => m.FindUsPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then(m => m.EditProfilePageModule)
  },

  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpPageModule)
  },
  {
    path: 'desvanecido',
    loadChildren: () => import('./individual-services/desvanecido/desvanecido.module').then(m => m.DesvanecidoPageModule)
  },
  {
    path: 'crema',
    loadChildren: () => import('./individual-products/crema/crema.module').then(m => m.CremaPageModule)
  },
  {
    path: 'reservations',
    loadChildren: () => import('./reservations/reservations.module').then(m => m.ReservationsPageModule)
  },
  {
    path: 'shopping',
    loadChildren: () => import('./shopping/shopping.module').then(m => m.ShoppingPageModule)
  },
  {
    path: 'cera',
    loadChildren: () => import('./individual-products/cera/cera.module').then(m => m.CeraPageModule)
  },
  {
    path: 'balsamo-barba',
    loadChildren: () => import('./individual-products/balsamo-barba/balsamo-barba.module').then(m => m.BalsamoBarbaPageModule)
  },
  {
    path: 'fibra',
    loadChildren: () => import('./individual-products/fibra/fibra.module').then(m => m.FibraPageModule)
  },
  {
    path: 'polvo',
    loadChildren: () => import('./individual-products/polvo/polvo.module').then(m => m.PolvoPageModule)
  },
  {
    path: 'pomada-barba',
    loadChildren: () => import('./individual-products/pomada-barba/pomada-barba.module').then(m => m.PomadaBarbaPageModule)
  },
  {
    path: 'shampoo',
    loadChildren: () => import('./individual-products/shampoo/shampoo.module').then(m => m.ShampooPageModule)
  },
  {
    path: 'crema-barba',
    loadChildren: () => import('./individual-products/crema-barba/crema-barba.module').then(m => m.CremaBarbaPageModule)
  },
  {
    path: 'afeitado',
    loadChildren: () => import('./individual-services/afeitado/afeitado.module').then(m => m.AfeitadoPageModule)
  },
  {
    path: 'arreglo-barba',
    loadChildren: () => import('./individual-services/arreglo-barba/arreglo-barba.module').then(m => m.ArregloBarbaPageModule)
  },
  {
    path: 'arreglo-ceja',
    loadChildren: () => import('./individual-services/arreglo-ceja/arreglo-ceja.module').then(m => m.ArregloCejaPageModule)
  },
  {
    path: 'corte-escolar',
    loadChildren: () => import('./individual-services/corte-escolar/corte-escolar.module').then(m => m.CorteEscolarPageModule)
  },
  {
    path: 'disenos',
    loadChildren: () => import('./individual-services/disenos/disenos.module').then(m => m.DisenosPageModule)
  },
  {
    path: 'mascarilla',
    loadChildren: () => import('./individual-services/mascarilla/mascarilla.module').then(m => m.MascarillaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
