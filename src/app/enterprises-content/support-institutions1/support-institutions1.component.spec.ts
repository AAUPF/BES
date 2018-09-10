import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportInstitutions1Component } from './support-institutions1.component';

describe('SupportInstitutions1Component', () => {
  let component: SupportInstitutions1Component;
  let fixture: ComponentFixture<SupportInstitutions1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportInstitutions1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportInstitutions1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
