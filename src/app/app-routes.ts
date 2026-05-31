import { Routes } from '@angular/router';
import { MainLayout } from './layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        loadComponent: () => import('./feature/home/home').then((x) => x.Home)
      },
      {
        path: 'about',
        loadComponent: () => import('./feature/about/about').then((x) => x.About)
      },
      {
        path: 'skills',
        loadComponent: () => import('./feature/skills/skills').then((x) => x.Skills)
      },
      {
        path: 'resume',
        loadComponent: () => import('./feature/resume/resume').then((x) => x.Resume)
      },
      {
        path: 'projects',
        loadComponent: () => import('./feature/projects/projects').then((x) => x.Projects)
      },
      {
        path: 'contact',
        loadComponent: () => import('./feature/contact/contact').then((x) => x.Contact)
      }
    ]
  },
  { path: '**', redirectTo: '' }
];
