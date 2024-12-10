
import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { SearchBarComponent } from "../search-bar/search-bar.component";

@Component({
  selector: 'app-intro-section',
  imports: [MatIconModule, MatProgressBarModule, SearchBarComponent],
  templateUrl: './intro-section.component.html',
  styleUrl: './intro-section.component.css'
})
export class IntroSectionComponent {

}
