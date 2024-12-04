import { Component, OnInit } from '@angular/core';
import { WineCardService } from '../../services/wine-card-service';
import { Wine } from '../../interfaces/winecard.interface';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';




@Component({
  selector: 'app-cards',
  imports: [CommonModule, MatCardModule,MatChipsModule, MatIconModule, MatButtonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit {

  public wine: Wine[] = [];
  public wineTitles: string[]=[];
  public wineImages: { [title: string]: string } = {};

  constructor(private wineService: WineCardService) {

  }
  ngOnInit(): void {
    this.getBottlesAll();
  }

  getBottlesAll() {
    this.wineService.getAllBottles().subscribe(data => {
      this.wine = data.slice(0,150);
      console.log(this.wine);
      //this.wineTitles= this.wine.map((bottle:{title:string})=> bottle.title)
      //console.log(this.wineTitles)

      //const limitedWineTitles = this.wineTitles.slice(0, 100);

      /*limitedWineTitles.forEach(title =>{
        this.wineService.fetchImageFromGoogle(title).subscribe(
          (images)=>{
            if(images.length>0){
              this.wineImages[title] = images[0]
            }else{
              console.warn(`No se encontró imagen para: ${title}`)
            }
          },
          (error)=>console.error(`Error buscando imagen para ${title}:`, error)
        )
      })*/
    })
  }



}
