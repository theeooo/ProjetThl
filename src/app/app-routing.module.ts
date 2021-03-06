import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'identification',
    loadChildren: () => import('./identification/identification.module').then(m => m.IdentificationPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then(m => m.AccountPageModule)
  },
  {
    path: 'pass',
    loadChildren: () => import('./pass/pass.module').then(m => m.PassPageModule)
  },
  {
    path: 'modal-scanner',
    loadChildren: () => import('./shared/modal/modal-scanner/modal-scanner.module').then(m => m.ModalScannerPageModule)
  },
  {
    path: 'modal-info-qr',
    loadChildren: () => import('./shared/modal/modal-info-qr/modal-info-qr.module').then(m => m.ModalInfoQrPageModule)
  },
  {
    path: 'modal-link',
    loadChildren: () => import('./shared/modal/modal-link/modal-link.module').then(m => m.ModalLinkPageModule)
  },
  {
    path: 'modal-share',
    loadChildren: () => import('./shared/modal/modal-share/modal-share.module').then(m => m.ModalSharePageModule)
  },
  {
    path: 'modal-about',
    loadChildren: () => import('./shared/modal/modal-about/modal-about.module').then(m => m.ModalAboutPageModule)
  },
  {
    path: 'citizen-tab',
    loadChildren: () => import('./citizen-tab/citizen-tab.module').then(m => m.CitizenTabPageModule)
  },
  {
    path: 'doctor-tab',
    loadChildren: () => import('./doctor-tab/doctor-tab.module').then(m => m.DoctorTabPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
