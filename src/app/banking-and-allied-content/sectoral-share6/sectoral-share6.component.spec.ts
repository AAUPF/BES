import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectoralShare6Component } from './sectoral-share6.component';

describe('SectoralShare6Component', () => {
  let component: SectoralShare6Component;
  let fixture: ComponentFixture<SectoralShare6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectoralShare6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectoralShare6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
