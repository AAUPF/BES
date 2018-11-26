import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectoralShare3Component } from './sectoral-share3.component';

describe('SectoralShare3Component', () => {
  let component: SectoralShare3Component;
  let fixture: ComponentFixture<SectoralShare3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectoralShare3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectoralShare3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
