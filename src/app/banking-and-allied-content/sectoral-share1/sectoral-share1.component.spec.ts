import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectoralShare1Component } from './sectoral-share1.component';

describe('SectoralShare1Component', () => {
  let component: SectoralShare1Component;
  let fixture: ComponentFixture<SectoralShare1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectoralShare1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectoralShare1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
