import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import InicioComponent from "./components/inicio/inicio.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidenavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'holyWine';
}
