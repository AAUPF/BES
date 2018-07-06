import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriculturalInputs7Component } from './agricultural-inputs7.component';

describe('AgriculturalInputs7Component', () => {
  let component: AgriculturalInputs7Component;
  let fixture: ComponentFixture<AgriculturalInputs7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgriculturalInputs7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgriculturalInputs7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
