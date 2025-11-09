
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Wine } from '../../interfaces/winecard.interface';
import { WineCardService } from '../../services/wine-card-service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { CardsComponent } from "../cards/cards.component";
import { Subscription } from 'rxjs';
import { FooterComponent } from "../footer/footer.component";
import { QRCodeComponent } from 'angularx-qrcode';
import { MatProgressBarModule } from "@angular/material/progress-bar";




@Component({
  selector: 'app-search-bar',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatProgressSpinnerModule, MatCardModule, MatChipsModule, MatIconModule, MatButtonModule, CardsComponent, FooterComponent, MatProgressBarModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent implements OnInit, OnDestroy {

  constructor(private wineService: WineCardService) { }


  ngOnDestroy(): void {
    this.getBottlesDestroy?.unsubscribe();
    this.getBottlesDestroy1?.unsubscribe();
  }

  ngOnInit(): void {
    this.ListBootleSearch();
  }

  searchTerm: string = '';
  myInput: FormControl = new FormControl('');

  public wine: Wine[] = [];
  public wineTasters: string[] = [];
  public wines: Wine[] = [];
  isLoading = false;

  displayedBottles: any[] = [];

  title = 'qr-code-generator';
  limit = 150;
  offset = 0;

  private getBottlesDestroy!: Subscription;
  private getBottlesDestroy1!: Subscription;



  filteredWines(event: KeyboardEvent): void {

    //console.log(this.myInput.value);
    //console.log(this.wine)
    //console.log(this.wineTitles);



    if (event.key === 'Enter') {
      const searchBar = this.myInput.value.trim().toLowerCase();



      // console.log( 'Input:', searchBar);

      if (searchBar.length > 0) {

        this.isLoading = true;

        setTimeout(() => {

          let filtered = this.wine.filter((wineFiltered) => {
            const titleLower = wineFiltered.title.toLowerCase();
            //  console.log(titleLower);
            //  console.log(searchBar);

            let matchs = titleLower.includes(searchBar);
            // console.log('matchs:', matchs)
            return matchs;
          })
          this.wines = filtered;
          this.isLoading = false;

          this.myInput.reset('')

        }, 2000);
      }
    }
  }

  resetSearchInput() {
    if (this.wines.length) {
      this.myInput.reset('')
      this.wines = [];
    }
  }



  getBottlesAll() {
    this.getBottlesDestroy = this.wineService.getAllBottles(this.limit, this.offset).subscribe({
      next: (data) => {

        this.displayedBottles = [...this.displayedBottles, ...data];
        this.offset += this.limit; // Actualiza el offset para la siguiente consulta
      },
      error: (error) => console.error('Error al cargar más datos', error)

    })
  }



  ListBootleSearch() {
    this.getBottlesDestroy1 = this.wineService.getAllBottles1().subscribe(data => {
      this.wine = data;
      // console.log(this.wine);


    })



  }
}





