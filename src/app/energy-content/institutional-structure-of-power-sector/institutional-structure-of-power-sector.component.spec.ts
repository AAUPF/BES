import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionalStructureOfPowerSectorComponent } from './institutional-structure-of-power-sector.component';

describe('InstitutionalStructureOfPowerSectorComponent', () => {
  let component: InstitutionalStructureOfPowerSectorComponent;
  let fixture: ComponentFixture<InstitutionalStructureOfPowerSectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitutionalStructureOfPowerSectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionalStructureOfPowerSectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
