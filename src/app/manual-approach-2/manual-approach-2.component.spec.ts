/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ManualApproach-2Component } from './manual-approach-2.component';

describe('ManualApproach-2Component', () => {
  let component: ManualApproach-2Component;
  let fixture: ComponentFixture<ManualApproach-2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualApproach-2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualApproach-2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
