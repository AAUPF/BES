import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuralInfrastructureDevelopmentFundComponent } from './rural-infrastructure-development-fund.component';

describe('RuralInfrastructureDevelopmentFundComponent', () => {
  let component: RuralInfrastructureDevelopmentFundComponent;
  let fixture: ComponentFixture<RuralInfrastructureDevelopmentFundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuralInfrastructureDevelopmentFundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuralInfrastructureDevelopmentFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
