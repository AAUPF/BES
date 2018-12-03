import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationArtCulture7Component } from './education-art-culture7.component';

describe('EducationArtCulture7Component', () => {
  let component: EducationArtCulture7Component;
  let fixture: ComponentFixture<EducationArtCulture7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationArtCulture7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationArtCulture7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
