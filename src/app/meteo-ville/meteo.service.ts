import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private httpClient: HttpClient) { }

  getMeteo(ville) {
    return this.httpClient.get<any[]>('/services//json//' + ville).pipe(map(res => res));
  }

}
