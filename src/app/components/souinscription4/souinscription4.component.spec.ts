import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Souinscription4Component } from './souinscription4.component';

describe('Souinscription4Component', () => {
  let component: Souinscription4Component;
  let fixture: ComponentFixture<Souinscription4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Souinscription4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Souinscription4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
