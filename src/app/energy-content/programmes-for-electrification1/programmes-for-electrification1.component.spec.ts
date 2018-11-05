import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammesForElectrification1Component } from './programmes-for-electrification1.component';

describe('ProgrammesForElectrification1Component', () => {
  let component: ProgrammesForElectrification1Component;
  let fixture: ComponentFixture<ProgrammesForElectrification1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammesForElectrification1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammesForElectrification1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
