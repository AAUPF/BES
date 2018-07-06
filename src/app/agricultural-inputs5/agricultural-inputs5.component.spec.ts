import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriculturalInputs5Component } from './agricultural-inputs5.component';

describe('AgriculturalInputs5Component', () => {
  let component: AgriculturalInputs5Component;
  let fixture: ComponentFixture<AgriculturalInputs5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgriculturalInputs5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgriculturalInputs5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
