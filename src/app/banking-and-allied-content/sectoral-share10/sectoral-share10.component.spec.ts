import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectoralShare10Component } from './sectoral-share10.component';

describe('SectoralShare10Component', () => {
  let component: SectoralShare10Component;
  let fixture: ComponentFixture<SectoralShare10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectoralShare10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectoralShare10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
