import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateDomesticProduct11Component } from './state-domestic-product11.component';

describe('StateDomesticProduct11Component', () => {
  let component: StateDomesticProduct11Component;
  let fixture: ComponentFixture<StateDomesticProduct11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateDomesticProduct11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateDomesticProduct11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
