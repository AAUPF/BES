import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriculturalInputs1Component } from './agricultural-inputs1.component';

describe('AgriculturalInputs1Component', () => {
  let component: AgriculturalInputs1Component;
  let fixture: ComponentFixture<AgriculturalInputs1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgriculturalInputs1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgriculturalInputs1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
