import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Wine } from '../../interfaces/winecard.interface';
import { WineCardService } from '../../services/wine-card-service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-search-bar',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatCardModule,MatChipsModule, MatIconModule, MatButtonModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent implements OnInit {
  constructor(private wineService: WineCardService) { }

  ngOnInit(): void {
    this.getBottlesAll();
    this.filteredWines();

  }

  searchTerm: string = '';
  myInput: FormControl = new FormControl('');

  public wine: Wine[] = [];
  public wineTitles: string[] = [];
  public wines: Wine[] = [];




  filteredWines(){

    //console.log(this.myInput.value);
    //console.log(this.wine)
    //console.log(this.wineTitles);
    let searchBar = this.myInput.value.toLowerCase();
    let filtered = this.wine.filter((wineFiltered) => {

      const titleLower = wineFiltered.title.toLowerCase();
      let matchs = titleLower.includes(searchBar) && searchBar.length >= 3;
      return matchs;

    })
    this.wines = filtered;



  }

  getBottlesAll() {
    this.wineService.getAllBottles().subscribe(data => {
      this.wine = data.slice(0, 100);
      // console.log(this.wine);
      this.wineTitles = this.wine.map((bottle: { title: string }) => bottle.title)
      //console.log(this.wineTitles)
    })
  }



}
