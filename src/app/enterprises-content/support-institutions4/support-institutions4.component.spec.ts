import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportInstitutions4Component } from './support-institutions4.component';

describe('SupportInstitutions4Component', () => {
  let component: SupportInstitutions4Component;
  let fixture: ComponentFixture<SupportInstitutions4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportInstitutions4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportInstitutions4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
