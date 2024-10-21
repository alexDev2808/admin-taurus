import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    },
    {
        path: 'notfound',
        loadComponent: () => import('./pages/notfound/notfound.component').then(m => m.NotfoundComponent),
    },
    {
        path: 'carrusel',
        loadComponent: () => import('./pages/carrusel/carrusel.component').then(m => m.CarruselComponent),
        children: [
            {
                path: 'comunicados',
                loadComponent: () => import('./pages/carrusel/components/comunicados/comunicados.component').then(m => m.ComunicadosComponent)
            }
        ],
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/notfound'
    }
];
