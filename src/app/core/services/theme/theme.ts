import { ApplicationRef, Injectable, inject, signal } from '@angular/core';

import { LOCALSTORAGE_ITEMS, ThemeOptions } from '@core/constants';

@Injectable({
  providedIn: 'root'
})
export class Theme {
  private readonly _appRef = inject(ApplicationRef);

  readonly currentTheme = signal<ThemeOptions>(ThemeOptions.SYSTEM);

  constructor() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      this.updateTheme();

      // Trigger refresh of UI
      // this._appRef.tick();
    });
  }

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

  private addDarkClass(): void {
    document.documentElement.classList.add('dark');
  }

  private removeDarkClass(): void {
    document.documentElement.classList.remove('dark');
  }
}
