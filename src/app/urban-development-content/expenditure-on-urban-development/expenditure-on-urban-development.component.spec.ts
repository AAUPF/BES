import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenditureOnUrbanDevelopmentComponent } from './expenditure-on-urban-development.component';

describe('ExpenditureOnUrbanDevelopmentComponent', () => {
  let component: ExpenditureOnUrbanDevelopmentComponent;
  let fixture: ComponentFixture<ExpenditureOnUrbanDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenditureOnUrbanDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenditureOnUrbanDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
