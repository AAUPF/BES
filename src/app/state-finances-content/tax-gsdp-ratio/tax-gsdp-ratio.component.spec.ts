import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxGSDPRatioComponent } from './tax-gsdp-ratio.component';

describe('TaxGSDPRatioComponent', () => {
  let component: TaxGSDPRatioComponent;
  let fixture: ComponentFixture<TaxGSDPRatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxGSDPRatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxGSDPRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
