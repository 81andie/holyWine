import { Routes } from '@angular/router';
import InicioComponent from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },



];
