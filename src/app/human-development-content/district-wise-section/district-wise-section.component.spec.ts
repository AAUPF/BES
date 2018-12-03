import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictWiseSectionComponent } from './district-wise-section.component';

describe('DistrictWiseSectionComponent', () => {
  let component: DistrictWiseSectionComponent;
  let fixture: ComponentFixture<DistrictWiseSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictWiseSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictWiseSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
