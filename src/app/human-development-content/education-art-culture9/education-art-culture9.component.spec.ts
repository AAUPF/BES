import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationArtCulture9Component } from './education-art-culture9.component';

describe('EducationArtCulture9Component', () => {
  let component: EducationArtCulture9Component;
  let fixture: ComponentFixture<EducationArtCulture9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationArtCulture9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationArtCulture9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
