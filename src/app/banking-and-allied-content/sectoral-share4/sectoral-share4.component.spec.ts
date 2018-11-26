import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectoralShare4Component } from './sectoral-share4.component';

describe('SectoralShare4Component', () => {
  let component: SectoralShare4Component;
  let fixture: ComponentFixture<SectoralShare4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectoralShare4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectoralShare4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
