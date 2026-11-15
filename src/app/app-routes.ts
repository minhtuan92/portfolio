import { Routes } from '@angular/router';
import { MainLayout } from './layout';

const SITE = 'Tuan Tran';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        title: `${SITE} | Full-stack Developer`,
        loadComponent: () => import('./feature/home/home').then((x) => x.Home)
      },
      {
        path: 'about',
        title: `About | ${SITE}`,
        loadComponent: () => import('./feature/about/about').then((x) => x.About)
      },
      {
        path: 'skills',
        title: `Skills | ${SITE}`,
        loadComponent: () => import('./feature/skills/skills').then((x) => x.Skills)
      },
      {
        path: 'resume',
        title: `Resume | ${SITE}`,
        loadComponent: () => import('./feature/resume/resume').then((x) => x.Resume)
      },
      {
        path: 'projects',
        title: `Projects | ${SITE}`,
        loadComponent: () => import('./feature/projects/projects').then((x) => x.Projects)
      },
      {
        path: 'contact',
        title: `Contact | ${SITE}`,
        loadComponent: () => import('./feature/contact/contact').then((x) => x.Contact)
      }
    ]
  },
  { path: '**', redirectTo: '' }
];
