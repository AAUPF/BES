import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriculturalInputs8Component } from './agricultural-inputs8.component';

describe('AgriculturalInputs8Component', () => {
  let component: AgriculturalInputs8Component;
  let fixture: ComponentFixture<AgriculturalInputs8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgriculturalInputs8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgriculturalInputs8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
