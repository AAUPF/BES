import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionalDisparityComponent } from './regional-disparity.component';

describe('RegionalDisparityComponent', () => {
  let component: RegionalDisparityComponent;
  let fixture: ComponentFixture<RegionalDisparityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionalDisparityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionalDisparityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
