import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculesComponent } from './pelicules.component';

describe('PeliculesComponent', () => {
  let component: PeliculesComponent;
  let fixture: ComponentFixture<PeliculesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
