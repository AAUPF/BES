import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriculturalInputs4Component } from './agricultural-inputs4.component';

describe('AgriculturalInputs4Component', () => {
  let component: AgriculturalInputs4Component;
  let fixture: ComponentFixture<AgriculturalInputs4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgriculturalInputs4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgriculturalInputs4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
