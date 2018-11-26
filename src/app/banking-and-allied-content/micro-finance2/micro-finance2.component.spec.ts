import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroFinance2Component } from './micro-finance2.component';

describe('MicroFinance2Component', () => {
  let component: MicroFinance2Component;
  let fixture: ComponentFixture<MicroFinance2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroFinance2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroFinance2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
