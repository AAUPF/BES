import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationArtCulture2Component } from './education-art-culture2.component';

describe('EducationArtCulture2Component', () => {
  let component: EducationArtCulture2Component;
  let fixture: ComponentFixture<EducationArtCulture2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationArtCulture2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationArtCulture2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
