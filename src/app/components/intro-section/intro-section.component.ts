
import { Component} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { Wine } from '../../interfaces/winecard.interface';
import { IntroSection1Component } from "../intro-section1/intro-section1.component";
import { FooterComponent } from "../footer/footer.component";

@Component({

  selector: 'app-intro-section',
  imports: [MatIconModule, MatProgressBarModule, IntroSection1Component, FooterComponent],
  templateUrl: './intro-section.component.html',
  styleUrl: './intro-section.component.css',


})
export class IntroSectionComponent {




}
