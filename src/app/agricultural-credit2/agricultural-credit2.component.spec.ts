import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriculturalCredit2Component } from './agricultural-credit2.component';

describe('AgriculturalCredit2Component', () => {
  let component: AgriculturalCredit2Component;
  let fixture: ComponentFixture<AgriculturalCredit2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgriculturalCredit2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgriculturalCredit2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
