import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateDomesticProduct6Component } from './state-domestic-product6.component';

describe('StateDomesticProduct6Component', () => {
  let component: StateDomesticProduct6Component;
  let fixture: ComponentFixture<StateDomesticProduct6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateDomesticProduct6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateDomesticProduct6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
