import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationArtCulture5Component } from './education-art-culture5.component';

describe('EducationArtCulture5Component', () => {
  let component: EducationArtCulture5Component;
  let fixture: ComponentFixture<EducationArtCulture5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationArtCulture5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationArtCulture5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
