import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('Component: app', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    });
  });

  it('should be created the app component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    // fixture.detectChanges();
    expect(app).toBeTruthy();
  });
})
