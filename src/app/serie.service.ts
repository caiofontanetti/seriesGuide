import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  seriesUrl = '/api/series/popular/';
  

  constructor(private http: HttpClient) { }

  getSeries (page: number) {
    return this.http.get(<any>(`${this.seriesUrl} ${page}`));
    // var seriesFinal = Object.keys(seriesFirst).map(function (key) { return seriesFirst[key]; });
    // return seriesFinal;
  }

  
  
}


