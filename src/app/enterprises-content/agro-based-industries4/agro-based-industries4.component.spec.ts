import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgroBasedIndustries4Component } from './agro-based-industries4.component';

describe('AgroBasedIndustries4Component', () => {
  let component: AgroBasedIndustries4Component;
  let fixture: ComponentFixture<AgroBasedIndustries4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgroBasedIndustries4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgroBasedIndustries4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
