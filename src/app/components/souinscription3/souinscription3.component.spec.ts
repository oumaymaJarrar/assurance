import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Souinscription3Component } from './souinscription3.component';

describe('Souinscription3Component', () => {
  let component: Souinscription3Component;
  let fixture: ComponentFixture<Souinscription3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Souinscription3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Souinscription3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
