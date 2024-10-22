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
            },
            {
                path: 'inyeccion',
                loadComponent: () => import('./pages/carrusel/components/inyeccion/inyeccion.component').then(m => m.InyeccionComponent)
            },
            {
                path: 'ensamble',
                loadComponent: () => import('./pages/carrusel/components/ensamble/ensamble.component').then(m => m.EnsambleComponent)
            }
        ],
    },
    {
        path: 'configuration',
        loadComponent: () => import('./pages/configuration/configuration.component').then(m => m.ConfigurationComponent),
        children: [
            {
                path: 'comunicados',
                loadComponent: () => import('./pages/configuration/components/comunicados/comunicados.component').then(m => m.ComunicadosComponent)
            },
            {
                path: 'inyeccion',
                loadComponent: () => import('./pages/configuration/components/inyeccion/inyeccion.component').then(m => m.InyeccionComponent)
            },
            {
                path: 'ensamble',
                loadComponent: () => import('./pages/configuration/components/ensamble/ensamble.component').then(m => m.EnsambleComponent)
            },
        ]
    },
    {
        path: 'sheet',
        loadComponent: () => import('./pages/sheet/sheet.component').then(m => m.SheetComponent),
        children: [
            
        ]
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
