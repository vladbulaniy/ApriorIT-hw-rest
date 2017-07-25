import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('Component: Login', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent]
    });
  });

  it('should be created the login component', () => {
    let fixture = TestBed.createComponent(LoginComponent);
    let login = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(login).toBeTruthy();
  });
})
