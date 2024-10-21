import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'notfound',
        component: NotfoundComponent,
        pathMatch: 'full'
    },
    // {
    //     path: '**',
    //     redirectTo: 'notfound',
    //     pathMatch: 'full'
    // }
    

];
