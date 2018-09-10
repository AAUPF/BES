import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportInstitutions3Component } from './support-institutions3.component';

describe('SupportInstitutions3Component', () => {
  let component: SupportInstitutions3Component;
  let fixture: ComponentFixture<SupportInstitutions3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportInstitutions3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportInstitutions3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
