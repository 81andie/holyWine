import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NewsletterComponent } from "../newsletter/newsletter.component";

@Component({
  selector: 'app-contacto',
  imports: [FooterComponent, NewsletterComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

}
