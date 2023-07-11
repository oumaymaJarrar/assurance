import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Souinscription1Component } from './souinscription1.component';

describe('Souinscription1Component', () => {
  let component: Souinscription1Component;
  let fixture: ComponentFixture<Souinscription1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Souinscription1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Souinscription1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
