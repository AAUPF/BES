import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateDomesticProduct1Component } from './state-domestic-product1.component';

describe('StateDomesticProduct1Component', () => {
  let component: StateDomesticProduct1Component;
  let fixture: ComponentFixture<StateDomesticProduct1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateDomesticProduct1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateDomesticProduct1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
