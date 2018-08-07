import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualRainfallComponent } from './annual-rainfall.component';

describe('AnnualRainfallComponent', () => {
  let component: AnnualRainfallComponent;
  let fixture: ComponentFixture<AnnualRainfallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnualRainfallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualRainfallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
