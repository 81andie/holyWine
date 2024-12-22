import { Routes } from '@angular/router';
import InicioComponent from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { VarietyGrapesComponent } from './components/variety-grapes/variety-grapes.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'catalogo', component: CatalogComponent },
  { path: 'variedad', component: VarietyGrapesComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent }



];
