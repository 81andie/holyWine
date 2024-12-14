import { Component, OnDestroy, OnInit } from '@angular/core';
import { WineCardService } from '../../services/wine-card-service';
import { Wine } from '../../interfaces/winecard.interface';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-cards',
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatListModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit, OnDestroy{

  public wines: Wine[] = [];
  private getBottlesDestroy!: Subscription;

  displayedBottles: any[] = [];
  limit = 20;
  offset = 0;


  constructor(private wineService: WineCardService) {}
  ngOnDestroy(): void {
    this.getBottlesDestroy?.unsubscribe();

  }


  ngOnInit(): void {
    this.getBottlesAll();

  }

  getBottlesAll() {
    this.getBottlesDestroy= this.wineService.getAllBottles(this.limit, this.offset).subscribe({
      next: (data) => {
        this.displayedBottles = [...this.displayedBottles, ...data.map(bootle=> ({...bootle, likes: 0}))];
        this.offset += this.limit; // Actualiza el offset para la siguiente consulta
      },
      error: (error) => console.error('Error al cargar más datos', error)

    })
  }

 scrollTop(){
  document.documentElement.scrollTop = 0;
 }

}


