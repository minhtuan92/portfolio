import { Injectable, signal } from '@angular/core';

import { LOCALSTORAGE_ITEMS, ThemeOptions } from '@core/constants';

@Injectable({
  providedIn: 'root'
})
export class Theme {
  readonly currentTheme = signal<ThemeOptions>(ThemeOptions.SYSTEM);

  constructor() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => this.updateTheme());
  }

  /** Reads the stored choice (dark by default), applies it to <html> and publishes it. */
  updateTheme(): void {
    const theme = localStorage.getItem(LOCALSTORAGE_ITEMS.THEME) || '';
    let newTheme: ThemeOptions;
    switch (theme) {
      case ThemeOptions.LIGHT:
        this.removeDarkClass();
        newTheme = ThemeOptions.LIGHT;
        break;
      case ThemeOptions.SYSTEM:
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          this.addDarkClass();
        } else this.removeDarkClass();
        newTheme = ThemeOptions.SYSTEM;
        break;
      default:
        this.addDarkClass();
        if (!theme) localStorage.setItem(LOCALSTORAGE_ITEMS.THEME, ThemeOptions.DARK);
        newTheme = ThemeOptions.DARK;
        break;
    }

    this.currentTheme.set(newTheme);
  }

  /** Flips between light and dark and remembers the choice. */
  toggle(): void {
    const next = document.documentElement.classList.contains('dark') ? ThemeOptions.LIGHT : ThemeOptions.DARK;
    localStorage.setItem(LOCALSTORAGE_ITEMS.THEME, next);
    this.updateTheme();
  }

  private addDarkClass(): void {
    document.documentElement.classList.add('dark');
  }

  private removeDarkClass(): void {
    document.documentElement.classList.remove('dark');
  }
}
