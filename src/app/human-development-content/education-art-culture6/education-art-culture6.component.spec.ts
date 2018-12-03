import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationArtCulture6Component } from './education-art-culture6.component';

describe('EducationArtCulture6Component', () => {
  let component: EducationArtCulture6Component;
  let fixture: ComponentFixture<EducationArtCulture6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationArtCulture6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationArtCulture6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
