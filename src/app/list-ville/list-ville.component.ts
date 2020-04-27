import { Component, OnInit } from '@angular/core';
import { VilleService } from './ville-service.service';

@Component({
  selector: 'app-list-ville',
  templateUrl: './list-ville.component.html',
  styleUrls: ['./list-ville.component.scss']
})
export class ListVilleComponent implements OnInit {

  villes:any[];

  constructor(private villeService: VilleService) { }

  ngOnInit(): void {
    this.villeService.getVilles().subscribe(
      (data) => {
        var listVilles:string[] = new Array();
        console.log(data);
        for(var i in data) {
          listVilles.push(data[i]);
        }
        this.villes = listVilles;
      }
    );
  }

}
