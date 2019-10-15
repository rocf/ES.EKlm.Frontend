import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddentFuncComponent } from './hidden-func.component';

describe('HiddentFuncComponent', () => {
  let component: HiddentFuncComponent;
  let fixture: ComponentFixture<HiddentFuncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiddentFuncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiddentFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
