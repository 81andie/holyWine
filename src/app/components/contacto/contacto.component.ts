import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NewsletterComponent } from "../newsletter/newsletter.component";
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-contacto',
  imports: [FooterComponent, NewsletterComponent,MatProgressBarModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

}
