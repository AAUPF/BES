import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportInstitutions2Component } from './support-institutions2.component';

describe('SupportInstitutions2Component', () => {
  let component: SupportInstitutions2Component;
  let fixture: ComponentFixture<SupportInstitutions2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportInstitutions2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportInstitutions2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
