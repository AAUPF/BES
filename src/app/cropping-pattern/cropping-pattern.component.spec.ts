import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CroppingPatternComponent } from './cropping-pattern.component';

describe('CroppingPatternComponent', () => {
  let component: CroppingPatternComponent;
  let fixture: ComponentFixture<CroppingPatternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroppingPatternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CroppingPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
