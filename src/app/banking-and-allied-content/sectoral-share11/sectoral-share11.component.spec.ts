import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectoralShare11Component } from './sectoral-share11.component';

describe('SectoralShare11Component', () => {
  let component: SectoralShare11Component;
  let fixture: ComponentFixture<SectoralShare11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectoralShare11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectoralShare11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
