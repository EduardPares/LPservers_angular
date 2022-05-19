import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudisComponent } from './estudis.component';

describe('EstudisComponent', () => {
  let component: EstudisComponent;
  let fixture: ComponentFixture<EstudisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
