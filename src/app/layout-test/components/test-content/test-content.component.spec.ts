/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestContentComponent } from './test-content.component';

describe('TestContentComponent', () => {
  let component: TestContentComponent;
  let fixture: ComponentFixture<TestContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
