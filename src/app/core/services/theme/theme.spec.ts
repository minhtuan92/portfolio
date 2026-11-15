import { TestBed } from '@angular/core/testing';

import { Theme } from './theme';

function stubMatchMedia(dark: boolean): void {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (): Partial<MediaQueryList> => ({ matches: dark, addEventListener: (): void => {} })
  });
}

function setup(dark: boolean): Theme {
  stubMatchMedia(dark);
  localStorage.clear();
  document.documentElement.classList.remove('dark');
  TestBed.configureTestingModule({});
  return TestBed.inject(Theme);
}

describe('Theme', () => {
  it('defaults to system and follows a dark OS', () => {
    const service = setup(true);
    service.updateTheme();
    expect(service.currentTheme()).toBe('system');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('defaults to system and follows a light OS', () => {
    const service = setup(false);
    service.updateTheme();
    expect(service.currentTheme()).toBe('system');
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('cycles system, light, dark and remembers the choice', () => {
    const service = setup(true);
    service.updateTheme();
    service.toggle();
    expect(service.currentTheme()).toBe('light');
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(localStorage.getItem('theme')).toBe('light');
    service.toggle();
    expect(service.currentTheme()).toBe('dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    service.toggle();
    expect(service.currentTheme()).toBe('system');
  });
});
