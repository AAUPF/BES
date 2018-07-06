import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriculturalInputs6Component } from './agricultural-inputs6.component';

describe('AgriculturalInputs6Component', () => {
  let component: AgriculturalInputs6Component;
  let fixture: ComponentFixture<AgriculturalInputs6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgriculturalInputs6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgriculturalInputs6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
