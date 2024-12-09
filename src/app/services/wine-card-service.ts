import { Injectable } from '@angular/core';
import { Wine } from '../interfaces/winecard.interface';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WineCardService {

  constructor( private http: HttpClient) { }


  private apiUrl= "https://gist.githubusercontent.com/ajubin/d331f3251db4bd239c7a1efd0af54e38/raw/058e1ad07398fc62ab7f3fcc13ef1007a48d01d7/wine-data-set.json";

  private cachedData: Wine[] | null = null;





  getAllBottles(limit: number, offset: number):Observable<Wine[]>{
    if (this.cachedData) {
      return of(this.cachedData.slice(offset, offset + limit));
    }

    return this.http.get<Wine[]>(this.apiUrl)
    .pipe(
      tap((data) => (this.cachedData = data)),
      map((data) => data.slice(offset, offset + limit ))
    )
  }

  getAllBottles1():Observable<Wine[]>{
    return this.http.get<Wine[]>(this.apiUrl)
    .pipe(
      tap((data) => console.log('Datos recibidos', data))
    )
  }



}
