import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path:'about',
        loadComponent: () => import('./features/about/pages/about/about.component').then(a => a.AboutComponent)
      },
      {
        path:'contact',
        loadComponent: () => import('./features/contact/pages/contact/contact.component').then(a => a.ContactComponent)
      },
      {
        path:'cars',
        loadComponent: () => import('./features/cars/pages/cars/cars.component').then(a => a.CarsComponent)
      },
      {
        path:'',
        pathMatch: 'full',
        loadComponent: () => import('./features/home/pages/home/home.component').then(a => a.HomeComponent)
      },
      {
        path:'**',
        redirectTo: ''
      }


    ]
  }
];
