import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Souinscription2Component } from './souinscription2.component';

describe('Souinscription2Component', () => {
  let component: Souinscription2Component;
  let fixture: ComponentFixture<Souinscription2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Souinscription2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Souinscription2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
