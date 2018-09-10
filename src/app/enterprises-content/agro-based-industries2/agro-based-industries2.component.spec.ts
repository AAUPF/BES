import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgroBasedIndustries2Component } from './agro-based-industries2.component';

describe('AgroBasedIndustries2Component', () => {
  let component: AgroBasedIndustries2Component;
  let fixture: ComponentFixture<AgroBasedIndustries2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgroBasedIndustries2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgroBasedIndustries2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
