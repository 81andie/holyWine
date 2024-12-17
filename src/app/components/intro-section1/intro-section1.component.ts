import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from "../footer/footer.component";


@Component({
  selector: 'app-intro-section1',
  imports: [MatIconModule, FooterComponent],
  templateUrl: './intro-section1.component.html',
  styleUrl: './intro-section1.component.css'
})
export class IntroSection1Component {

}
