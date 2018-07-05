import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriculturAlliedComponent } from './agricultur-allied.component';

describe('AgriculturAlliedComponent', () => {
  let component: AgriculturAlliedComponent;
  let fixture: ComponentFixture<AgriculturAlliedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgriculturAlliedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgriculturAlliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
