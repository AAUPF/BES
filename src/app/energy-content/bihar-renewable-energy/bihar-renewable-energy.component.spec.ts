import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiharRenewableEnergyComponent } from './bihar-renewable-energy.component';

describe('BiharRenewableEnergyComponent', () => {
  let component: BiharRenewableEnergyComponent;
  let fixture: ComponentFixture<BiharRenewableEnergyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiharRenewableEnergyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiharRenewableEnergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
