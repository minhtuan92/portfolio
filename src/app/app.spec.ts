import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { App } from './app';

function stubMatchMedia(): void {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (): Partial<MediaQueryList> => ({ matches: false, addEventListener: (): void => {} })
  });
}

describe('App', () => {
  beforeEach(() => {
    stubMatchMedia();
    TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])]
    });
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
