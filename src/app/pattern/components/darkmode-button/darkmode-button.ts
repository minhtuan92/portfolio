import { Component, inject } from '@angular/core';

import { Theme } from '@core/services';

/** A paper chip that cycles the theme: system (default), light, dark. */
@Component({
  selector: 'app-darkmode-button',
  template: `
    <button
      type="button"
      [attr.aria-label]="'Theme: ' + theme.currentTheme() + '. Click to change.'"
      (click)="theme.toggle()"
      class="shade-sm scrap bg-paper font-type text-paper-ink tilt-[2deg] flex h-11 w-[104px] cursor-pointer items-center justify-center gap-2 border-0 px-3 text-sm"
    >
      @switch (theme.currentTheme()) {
        @case ('light') {
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
        @case ('dark') {
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5z" />
          </svg>
        }
        @default {
          <svg
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="3" y="4" width="18" height="12" rx="1.5" />
            <path d="M8 20h8M12 16v4" />
          </svg>
        }
      }
      <span>{{ theme.currentTheme() }}</span>
    </button>
  `
})
export class DarkmodeButton {
  protected readonly theme = inject(Theme);
}
