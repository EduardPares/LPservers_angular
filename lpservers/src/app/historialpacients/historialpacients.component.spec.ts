import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialpacientsComponent } from './historialpacients.component';

describe('HistorialpacientsComponent', () => {
  let component: HistorialpacientsComponent;
  let fixture: ComponentFixture<HistorialpacientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialpacientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialpacientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
