import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateDomesticProduct2Component } from './state-domestic-product2.component';

describe('StateDomesticProduct2Component', () => {
  let component: StateDomesticProduct2Component;
  let fixture: ComponentFixture<StateDomesticProduct2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateDomesticProduct2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateDomesticProduct2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
