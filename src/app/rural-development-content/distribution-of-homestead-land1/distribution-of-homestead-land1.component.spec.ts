import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionOfHomesteadLand1Component } from './distribution-of-homestead-land1.component';

describe('DistributionOfHomesteadLand1Component', () => {
  let component: DistributionOfHomesteadLand1Component;
  let fixture: ComponentFixture<DistributionOfHomesteadLand1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributionOfHomesteadLand1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributionOfHomesteadLand1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
