import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateDomesticProduct3Component } from './state-domestic-product3.component';

describe('StateDomesticProduct3Component', () => {
  let component: StateDomesticProduct3Component;
  let fixture: ComponentFixture<StateDomesticProduct3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateDomesticProduct3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateDomesticProduct3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
