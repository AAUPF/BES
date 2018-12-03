import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationArtCulture1Component } from './education-art-culture1.component';

describe('EducationArtCulture1Component', () => {
  let component: EducationArtCulture1Component;
  let fixture: ComponentFixture<EducationArtCulture1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationArtCulture1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationArtCulture1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
