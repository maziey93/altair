import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowSwitcherComponent } from './window-switcher.component';

describe('WindowSwitcherComponent', () => {
  let component: WindowSwitcherComponent;
  let fixture: ComponentFixture<WindowSwitcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowSwitcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
