import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateDomesticProduct4Component } from './state-domestic-product4.component';

describe('StateDomesticProduct4Component', () => {
  let component: StateDomesticProduct4Component;
  let fixture: ComponentFixture<StateDomesticProduct4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateDomesticProduct4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateDomesticProduct4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
