import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectoralShare12Component } from './sectoral-share12.component';

describe('SectoralShare12Component', () => {
  let component: SectoralShare12Component;
  let fixture: ComponentFixture<SectoralShare12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectoralShare12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectoralShare12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
