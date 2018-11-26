import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroFinance1Component } from './micro-finance1.component';

describe('MicroFinance1Component', () => {
  let component: MicroFinance1Component;
  let fixture: ComponentFixture<MicroFinance1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroFinance1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroFinance1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
