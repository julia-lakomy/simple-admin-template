/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LongTableComponent } from './long-table.component';

describe('LongTableComponent', () => {
  let component: LongTableComponent;
  let fixture: ComponentFixture<LongTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
