import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgroBasedIndustries1Component } from './agro-based-industries1.component';

describe('AgroBasedIndustries1Component', () => {
  let component: AgroBasedIndustries1Component;
  let fixture: ComponentFixture<AgroBasedIndustries1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgroBasedIndustries1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgroBasedIndustries1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
