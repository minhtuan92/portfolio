import { TestBed } from '@angular/core/testing';

import { Theme } from './theme';

function stubMatchMedia(): void {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (): Partial<MediaQueryList> => ({ matches: false, addEventListener: (): void => {} })
  });
}

describe('Theme', () => {
  let service: Theme;

  beforeEach(() => {
    stubMatchMedia();
    localStorage.clear();
    document.documentElement.classList.remove('dark');
    TestBed.configureTestingModule({});
    service = TestBed.inject(Theme);
  });

  it('defaults to dark when nothing is stored', () => {
    service.updateTheme();
    expect(service.currentTheme()).toBe('dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('toggles between dark and light and remembers the choice', () => {
    service.updateTheme();
    service.toggle();
    expect(service.currentTheme()).toBe('light');
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(localStorage.getItem('theme')).toBe('light');
    service.toggle();
    expect(service.currentTheme()).toBe('dark');
  });
});
