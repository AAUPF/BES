import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgcomponentComponent } from './svgcomponent.component';

describe('SvgcomponentComponent', () => {
  let component: SvgcomponentComponent;
  let fixture: ComponentFixture<SvgcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
