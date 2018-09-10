import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgroBasedIndustries5Component } from './agro-based-industries5.component';

describe('AgroBasedIndustries5Component', () => {
  let component: AgroBasedIndustries5Component;
  let fixture: ComponentFixture<AgroBasedIndustries5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgroBasedIndustries5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgroBasedIndustries5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
