import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgroBasedIndustries6Component } from './agro-based-industries6.component';

describe('AgroBasedIndustries6Component', () => {
  let component: AgroBasedIndustries6Component;
  let fixture: ComponentFixture<AgroBasedIndustries6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgroBasedIndustries6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgroBasedIndustries6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
