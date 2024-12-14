
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Wine } from '../../interfaces/winecard.interface';
import { WineCardService } from '../../services/wine-card-service';

@Component({
  selector: 'app-variety-grapes',
  imports: [CommonModule],
  templateUrl: './variety-grapes.component.html',
  styleUrl: './variety-grapes.component.css'
})
export class VarietyGrapesComponent implements OnInit {

  constructor(private wineService: WineCardService) { }

  ngOnInit(): void {
    this.searchVarietyWines();

  }

  private wine: Wine[] = [];
  private wineVariety: string[] = [];
  private wineVarietyUnique: string[] = [];

  searchVarietyWines() {
    this.wineService.getAllBottles1().subscribe(data => {
      this.wine = data;

      let multipleVariety = this.wine.map((variety: { variety: string }) =>(variety.variety))
      console.log(multipleVariety)

      let unique = new Set(multipleVariety.flat());
      this.wineVarietyUnique = [...unique];
      console.log(this.wineVarietyUnique)

      })


  }


}


