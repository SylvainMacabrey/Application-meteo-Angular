import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoVilleComponent } from './meteo-ville.component';

describe('MeteoVilleComponent', () => {
  let component: MeteoVilleComponent;
  let fixture: ComponentFixture<MeteoVilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeteoVilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoVilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
