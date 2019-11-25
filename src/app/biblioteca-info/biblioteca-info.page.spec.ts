import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecaInfoPage } from './biblioteca-info.page';

describe('BibliotecaInfoPage', () => {
  let component: BibliotecaInfoPage;
  let fixture: ComponentFixture<BibliotecaInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BibliotecaInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliotecaInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
