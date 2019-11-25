/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ManualApproachComponent } from './manual-approach.component';

describe('ManualApproachComponent', () => {
  let component: ManualApproachComponent;
  let fixture: ComponentFixture<ManualApproachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualApproachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualApproachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
