import { async, ComponentFixture, TestBed } from '@angular/core/testing';  
/*ComponentFixture: configureTestingModule in your test suite's beforeEach block and give it an object with similar values as a regular NgModule for declarations, providers and imports.*/

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async (() => {               /*beforeEach:runs before each test and is used for the setup part of a test. afterEach runs after each test and is used for the teardown part of a test.*/
    TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);   /*Testbed:writing uni test*/
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();    /*Boolean matcher: to whether equal to truth or false*/
  });
});
