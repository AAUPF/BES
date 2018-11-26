import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectoralShare9Component } from './sectoral-share9.component';

describe('SectoralShare9Component', () => {
  let component: SectoralShare9Component;
  let fixture: ComponentFixture<SectoralShare9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectoralShare9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectoralShare9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
