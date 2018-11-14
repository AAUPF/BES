import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionOfHomesteadLand2Component } from './distribution-of-homestead-land2.component';

describe('DistributionOfHomesteadLand2Component', () => {
  let component: DistributionOfHomesteadLand2Component;
  let fixture: ComponentFixture<DistributionOfHomesteadLand2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributionOfHomesteadLand2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributionOfHomesteadLand2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
