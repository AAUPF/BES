import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationArtCulture3Component } from './education-art-culture3.component';

describe('EducationArtCulture3Component', () => {
  let component: EducationArtCulture3Component;
  let fixture: ComponentFixture<EducationArtCulture3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationArtCulture3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationArtCulture3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
