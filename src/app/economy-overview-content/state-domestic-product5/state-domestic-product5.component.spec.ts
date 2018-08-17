import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateDomesticProduct5Component } from './state-domestic-product5.component';

describe('StateDomesticProduct5Component', () => {
  let component: StateDomesticProduct5Component;
  let fixture: ComponentFixture<StateDomesticProduct5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateDomesticProduct5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateDomesticProduct5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
