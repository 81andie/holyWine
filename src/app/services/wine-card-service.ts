import { Injectable } from '@angular/core';
import { Wine, WineVar } from '../interfaces/winecard.interface';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WineCardService {

  constructor(private http: HttpClient) { }


  private apiUrl = "https://gist.githubusercontent.com/ajubin/d331f3251db4bd239c7a1efd0af54e38/raw/058e1ad07398fc62ab7f3fcc13ef1007a48d01d7/wine-data-set.json";

  private cachedData: Wine[] | null = null;
  private cachedDataVariety: WineVar[] | null = null;




  getAllBottles(limit: number, offset: number): Observable<Wine[]> {
    if (this.cachedData) {
      return of(this.cachedData.slice(offset, offset + limit));
    }

    return this.http.get<Wine[]>(this.apiUrl)
      .pipe(
        tap((data) => (this.cachedData = data)),
        map((data) => data.slice(offset, offset + limit))
      )
  }

  getAllBottles1(): Observable<Wine[]> {
    return this.http.get<Wine[]>(this.apiUrl)
      .pipe(
        tap((data) => console.log('Datos recibidos', data))
      )
  }


  getAllVarieties(limit: number, offset: number): Observable<WineVar[]> {
    const baseHref = '/holyWine';
    const url = `${baseHref}/wines.json`;

    if (this.cachedDataVariety && Array.isArray(this.cachedDataVariety)) {
      return of(this.cachedDataVariety.slice(offset, offset + limit));
    }
    return this.http.get<{vinos:WineVar[]}>(url).pipe(
      tap((response)=>{
        if (Array.isArray(response.vinos)) {
          this.cachedDataVariety = response.vinos;
        } else {
          console.error('Data fetched is not an array:', response);
          this.cachedDataVariety = [];
        }

      }),

      map((response) =>
        Array.isArray(response.vinos)
          ? response.vinos.slice(offset, offset + limit)
          : []
      )
    );
  }

}
