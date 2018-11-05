import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammesForElectrification2Component } from './programmes-for-electrification2.component';

describe('ProgrammesForElectrification2Component', () => {
  let component: ProgrammesForElectrification2Component;
  let fixture: ComponentFixture<ProgrammesForElectrification2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammesForElectrification2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammesForElectrification2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
