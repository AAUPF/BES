import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateDomesticProduct9Component } from './state-domestic-product9.component';

describe('StateDomesticProduct9Component', () => {
  let component: StateDomesticProduct9Component;
  let fixture: ComponentFixture<StateDomesticProduct9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateDomesticProduct9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateDomesticProduct9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
