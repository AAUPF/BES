import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateFinancesComponent } from './state-finances.component';

describe('StateFinancesComponent', () => {
  let component: StateFinancesComponent;
  let fixture: ComponentFixture<StateFinancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateFinancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateFinancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
