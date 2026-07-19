import { Routes } from '@angular/router';
import { Home } from './pages/components/home/home';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./pages/components/home/home').then(c => c.Home) }
];
