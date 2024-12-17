import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import InicioComponent from "./components/inicio/inicio.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { FooterComponent } from "./components/footer/footer.component";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidenavComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'holyWine';
}
