import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriculturalInputs3Component } from './agricultural-inputs3.component';

describe('AgriculturalInputs3Component', () => {
  let component: AgriculturalInputs3Component;
  let fixture: ComponentFixture<AgriculturalInputs3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgriculturalInputs3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgriculturalInputs3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
