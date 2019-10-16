import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenFuncComponent } from './hidden-func.component';

describe('HiddenFuncComponent', () => {
  let component: HiddenFuncComponent;
  let fixture: ComponentFixture<HiddenFuncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiddenFuncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiddenFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
