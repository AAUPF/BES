import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateDomesticProduct8Component } from './state-domestic-product8.component';

describe('StateDomesticProduct8Component', () => {
  let component: StateDomesticProduct8Component;
  let fixture: ComponentFixture<StateDomesticProduct8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateDomesticProduct8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateDomesticProduct8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
