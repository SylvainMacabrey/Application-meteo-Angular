
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListVilleComponent } from './list-ville/list-ville.component';
import { MeteoVilleComponent } from './meteo-ville/meteo-ville.component';

import { VilleService } from './list-ville/ville-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ListVilleComponent,
    MeteoVilleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [
    VilleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
