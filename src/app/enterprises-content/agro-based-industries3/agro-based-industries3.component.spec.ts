import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgroBasedIndustries3Component } from './agro-based-industries3.component';

describe('AgroBasedIndustries3Component', () => {
  let component: AgroBasedIndustries3Component;
  let fixture: ComponentFixture<AgroBasedIndustries3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgroBasedIndustries3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgroBasedIndustries3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
