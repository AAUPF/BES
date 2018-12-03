import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationArtCulture4Component } from './education-art-culture4.component';

describe('EducationArtCulture4Component', () => {
  let component: EducationArtCulture4Component;
  let fixture: ComponentFixture<EducationArtCulture4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationArtCulture4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationArtCulture4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
