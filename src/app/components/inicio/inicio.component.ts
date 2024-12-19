import { Component } from '@angular/core';
import { IntroSectionComponent } from "../intro-section/intro-section.component";
import { FooterComponent } from "../footer/footer.component";
import { NewsletterComponent } from "../newsletter/newsletter.component";




@Component({
  selector: 'app-inicio',
  imports: [IntroSectionComponent, FooterComponent, NewsletterComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})


export  default class InicioComponent {





}
