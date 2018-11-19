import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalFinancesComponent } from './municipal-finances.component';

describe('MunicipalFinancesComponent', () => {
  let component: MunicipalFinancesComponent;
  let fixture: ComponentFixture<MunicipalFinancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunicipalFinancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunicipalFinancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
