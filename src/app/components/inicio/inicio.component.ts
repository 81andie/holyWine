import { Component } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { IntroSectionComponent } from "../intro-section/intro-section.component";
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { CardsComponent } from '../cards/cards.component';



@Component({
  selector: 'app-inicio',
  imports: [SidenavComponent, IntroSectionComponent, SearchBarComponent, CardsComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})


export  default class InicioComponent {





}
