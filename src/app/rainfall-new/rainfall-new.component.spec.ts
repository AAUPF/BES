import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RainfallNewComponent } from './rainfall-new.component';

describe('RainfallNewComponent', () => {
  let component: RainfallNewComponent;
  let fixture: ComponentFixture<RainfallNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RainfallNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RainfallNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
