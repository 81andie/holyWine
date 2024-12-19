import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ContactoComponent } from "../contacto/contacto.component";

@Component({
  selector: 'app-newsletter',
  imports: [MatProgressBarModule, ContactoComponent],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.css'
})
export class NewsletterComponent {

}
