import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectoralShare7Component } from './sectoral-share7.component';

describe('SectoralShare7Component', () => {
  let component: SectoralShare7Component;
  let fixture: ComponentFixture<SectoralShare7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectoralShare7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectoralShare7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
