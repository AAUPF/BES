import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriculturalInputs2Component } from './agricultural-inputs2.component';

describe('AgriculturalInputs2Component', () => {
  let component: AgriculturalInputs2Component;
  let fixture: ComponentFixture<AgriculturalInputs2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgriculturalInputs2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgriculturalInputs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
