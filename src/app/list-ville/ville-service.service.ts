import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VilleService {

  constructor(private httpClient: HttpClient) {

  }

  getVilles() {
      return this.httpClient.get<any[]>('/services//json//list-cities').pipe(map(res => res));
  }

}
