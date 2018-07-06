import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriculturalCredit1Component } from './agricultural-credit1.component';

describe('AgriculturalCredit1Component', () => {
  let component: AgriculturalCredit1Component;
  let fixture: ComponentFixture<AgriculturalCredit1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgriculturalCredit1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgriculturalCredit1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
