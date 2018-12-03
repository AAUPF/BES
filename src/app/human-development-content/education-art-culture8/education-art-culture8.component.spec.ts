import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationArtCulture8Component } from './education-art-culture8.component';

describe('EducationArtCulture8Component', () => {
  let component: EducationArtCulture8Component;
  let fixture: ComponentFixture<EducationArtCulture8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationArtCulture8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationArtCulture8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
