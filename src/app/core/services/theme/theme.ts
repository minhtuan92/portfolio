import { Injectable, signal } from '@angular/core';

import { LOCALSTORAGE_ITEMS, ThemeOptions } from '@core/constants';

const ORDER = [ThemeOptions.SYSTEM, ThemeOptions.LIGHT, ThemeOptions.DARK];

@Injectable({
  providedIn: 'root'
})
export class Theme {
  /** The user's choice: system (default), light or dark. */
  readonly currentTheme = signal<ThemeOptions>(ThemeOptions.SYSTEM);

  constructor() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => this.updateTheme());
  }

  /** Reads the stored choice (system by default), applies it to <html> and publishes it. */
  updateTheme(): void {
    const stored = localStorage.getItem(LOCALSTORAGE_ITEMS.THEME);
    const theme = ORDER.find((option) => option === stored) ?? ThemeOptions.SYSTEM;
    const dark =
      theme === ThemeOptions.DARK ||
      (theme === ThemeOptions.SYSTEM && window.matchMedia('(prefers-color-scheme: dark)').matches);

    document.documentElement.classList.toggle('dark', dark);
    this.currentTheme.set(theme);
  }

  /** Stores and applies a choice. */
  setTheme(theme: ThemeOptions): void {
    localStorage.setItem(LOCALSTORAGE_ITEMS.THEME, theme);
    this.updateTheme();
  }

  /** Cycles system -> light -> dark -> system. */
  toggle(): void {
    const next = ORDER[(ORDER.indexOf(this.currentTheme()) + 1) % ORDER.length];
    this.setTheme(next);
  }
}
