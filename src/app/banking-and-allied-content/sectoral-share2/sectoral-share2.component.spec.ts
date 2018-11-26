import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectoralShare2Component } from './sectoral-share2.component';

describe('SectoralShare2Component', () => {
  let component: SectoralShare2Component;
  let fixture: ComponentFixture<SectoralShare2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectoralShare2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectoralShare2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
