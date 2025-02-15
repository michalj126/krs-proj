import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'krs',
        loadChildren: () => import('./modules/krs/krs-routing.module').then(module => module.KrsRoutingModule),
    },
    { path: '', redirectTo: 'krs', pathMatch: 'full' }
];
