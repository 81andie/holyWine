import { Injectable } from '@angular/core';
import { Wine } from '../interfaces/winecard.interface';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WineCardService {

  constructor( private http: HttpClient) { }

  public bottlesWine: Wine[]=[];

  private apiUrl= "https://gist.githubusercontent.com/ajubin/d331f3251db4bd239c7a1efd0af54e38/raw/058e1ad07398fc62ab7f3fcc13ef1007a48d01d7/wine-data-set.json";

  private CX = '15bb7538872eb471b'; // Tu Search Engine ID
  private apiKey = 'AIzaSyB0-YiiUNHYu_BLPjXnTEtOvM5Dxrva1FI';

  getAllBottles():Observable<Wine[]>{
    return this.http.get<Wine[]>(this.apiUrl)
    .pipe(
      tap((data) => console.log('Datos recibidos', data))
    )
  }

  fetchImageFromGoogle(query: string, numImages: number = 1): Observable<string[]> {
    const url = `https://www.googleapis.com/customsearch/v1?q=${query}&cx=${this.CX}&key=${this.apiKey}&searchType=image&num=${numImages}`;
    return this.http.get<any>(url).pipe(
      map((data) => {
        if (data.items && data.items.length > 0) {
          return data.items.map((item: any) => item.link); // Devuelve las URLs de las imágenes
        }
        return [];
      })
    );
  }

}
