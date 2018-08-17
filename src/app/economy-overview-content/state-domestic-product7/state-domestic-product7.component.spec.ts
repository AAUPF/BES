import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateDomesticProduct7Component } from './state-domestic-product7.component';

describe('StateDomesticProduct7Component', () => {
  let component: StateDomesticProduct7Component;
  let fixture: ComponentFixture<StateDomesticProduct7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateDomesticProduct7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateDomesticProduct7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
