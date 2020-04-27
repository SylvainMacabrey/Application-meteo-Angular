import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MeteoService } from './meteo.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-meteo-ville',
  templateUrl: './meteo-ville.component.html',
  styleUrls: ['./meteo-ville.component.scss']
})
export class MeteoVilleComponent implements OnInit {

  meteo;
  semaine = [];
  searchForm: FormGroup;
  @ViewChild('alert', { static: true }) alert: ElementRef;
  errors = [];

  constructor(private fb: FormBuilder, private meteoService: MeteoService) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({  // Crée une instance de FormGroup
      ville: []                   // Crée une instance de FormControl
    });
    this.meteoService.getMeteo('paris').subscribe(
      (data) => {
        this.meteo = data;
        this.semaine.push(data['fcst_day_0']);
        this.semaine.push(data['fcst_day_1']);
        this.semaine.push(data['fcst_day_2']);
        this.semaine.push(data['fcst_day_3']);
        this.semaine.push(data['fcst_day_4']);
      }
    );
  }

  search() {
    let villeSearch = this.searchForm.value.ville.trim().toLowerCase();
    const regex = / /gi;
    villeSearch = villeSearch.replace(regex, '-');
    this.meteoService.getMeteo(villeSearch).subscribe(
      (data) => {
        if(data['errors']) {
          this.errors.push(data['errors'][0]);
          console.log("ERREUR:" + data['errors'][0].text);
        } else {
          this.errors = [];
          this.meteo = data;
          this.semaine = [];
          this.semaine.push(data['fcst_day_0']);
          this.semaine.push(data['fcst_day_1']);
          this.semaine.push(data['fcst_day_2']);
          this.semaine.push(data['fcst_day_3']);
          this.semaine.push(data['fcst_day_4']);
        }
      }
    );
  }

  closeAlert() {
    this.alert.nativeElement.classList.remove('show');
  }

}
