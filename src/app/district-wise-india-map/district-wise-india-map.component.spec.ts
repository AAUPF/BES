import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictWiseIndiaMapComponent } from './district-wise-india-map.component';

describe('DistrictWiseIndiaMapComponent', () => {
  let component: DistrictWiseIndiaMapComponent;
  let fixture: ComponentFixture<DistrictWiseIndiaMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictWiseIndiaMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictWiseIndiaMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
