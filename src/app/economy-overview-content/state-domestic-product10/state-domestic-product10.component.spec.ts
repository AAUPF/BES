import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateDomesticProduct10Component } from './state-domestic-product10.component';

describe('StateDomesticProduct10Component', () => {
  let component: StateDomesticProduct10Component;
  let fixture: ComponentFixture<StateDomesticProduct10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateDomesticProduct10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateDomesticProduct10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
