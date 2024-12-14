import { Routes } from '@angular/router';
import InicioComponent from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CatalogComponent } from './components/catalog/catalog.component';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path : 'catalogo', component: CatalogComponent},
  { path: 'contacto', component: ContactoComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },



];
