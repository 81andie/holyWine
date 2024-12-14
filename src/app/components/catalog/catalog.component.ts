import { Component } from '@angular/core';
import { IntroSection1Component } from "../intro-section1/intro-section1.component";
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SearchBarComponent } from "../search-bar/search-bar.component";

@Component({
  selector: 'app-catalog',
  imports: [MatIconModule, MatProgressBarModule, SearchBarComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {

}
