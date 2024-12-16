
import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Wine, WineVar } from '../../interfaces/winecard.interface';
import { WineCardService } from '../../services/wine-card-service';
import { Subscription } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-variety-grapes',
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatListModule],
  templateUrl: './variety-grapes.component.html',
  styleUrl: './variety-grapes.component.css'
})
export class VarietyGrapesComponent implements OnInit, OnDestroy {

  constructor(private wineService: WineCardService) {}

  ngOnDestroy(): void {
    this.getAllVarDestroy?.unsubscribe();
  }

  ngOnInit(): void {
  this.searchVarietyWines();
  }

  private wine: Wine[] = [];
  private wineVariety: WineVar[] = [];
  private getAllVarDestroy!: Subscription;
  public isVisible:boolean = true;
  displayedVariety: any[] = [];
  limit = 20;
  offset = 0;


  searchVarietyWines() {


     this.getAllVarDestroy= this.wineService.getAllVarieties(this.limit, this.offset).subscribe({
      next:(data)=>{
        this.displayedVariety =[...this.displayedVariety, ...data];
        this.offset += this.limit;
        this.isVisible = false;

      },

      error: (error)=>console.log('Error al cargar más datos', error)
     })

     }


    }










