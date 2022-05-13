import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculesdetallComponent } from './peliculesdetall.component';

describe('PeliculesdetallComponent', () => {
  let component: PeliculesdetallComponent;
  let fixture: ComponentFixture<PeliculesdetallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculesdetallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculesdetallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
