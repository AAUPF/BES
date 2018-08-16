import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomyOverviewComponent } from './economy-overview.component';

describe('EconomyOverviewComponent', () => {
  let component: EconomyOverviewComponent;
  let fixture: ComponentFixture<EconomyOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomyOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomyOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
