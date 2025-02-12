import { Routes } from '@angular/router';
import { TablaComponent } from './shared/tabla/tabla.component';
import { VentanasComponent } from './shared/ventanas/ventanas.component';

export const routes: Routes = [
    {path: 'tabla', component: TablaComponent},
    {path: 'ventanas', component: VentanasComponent},
];
