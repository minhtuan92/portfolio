import { Component, computed, inject } from '@angular/core';

import { ThemeOptions } from '@core/constants';
import { Theme } from '@core/services';

/** A paper chip that flips the site between its light and dark collage. */
@Component({
  selector: 'app-darkmode-button',
  template: `
    <button
      type="button"
      [attr.aria-label]="'Switch to ' + target() + ' theme'"
      (click)="toggleTheme()"
      class="shade-sm scrap bg-paper font-type text-paper-ink tilt-[2deg] flex h-11 cursor-pointer items-center gap-2 border-0 px-3 text-sm"
    >
      @if (target() === 'dark') {
        <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5z" />
        </svg>
      } @else {
        <svg
          aria-hidden="true"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
        >
          <circle cx="12" cy="12" r="4" fill="currentColor" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5" />
        </svg>
      }
      <span>{{ target() }}</span>
    </button>
  `
})
export class DarkmodeButton {
  private readonly theme = inject(Theme);

  /** The theme a click would switch to. */
  protected readonly target = computed(() => {
    const current = this.theme.currentTheme();
    const isDark =
      current === ThemeOptions.DARK ||
      (current === ThemeOptions.SYSTEM && window.matchMedia('(prefers-color-scheme: dark)').matches);
    return isDark ? ThemeOptions.LIGHT : ThemeOptions.DARK;
  });

  protected toggleTheme(): void {
    this.theme.toggle();
  }
}
