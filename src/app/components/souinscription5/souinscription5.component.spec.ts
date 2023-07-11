import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Souinscription5Component } from './souinscription5.component';

describe('Souinscription5Component', () => {
  let component: Souinscription5Component;
  let fixture: ComponentFixture<Souinscription5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Souinscription5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Souinscription5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
