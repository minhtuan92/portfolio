import { Component } from '@angular/core';

const WORDS = [
  'Angular',
  'RxJS',
  'TypeScript',
  'TailwindCSS',
  'Java',
  'Spring Boot',
  'Node.js',
  'PostgreSQL',
  'MongoDB',
  'Kafka',
  'Claude Code'
] as const;

/** Yellow tape of skills that scrolls forever. Decorative, hidden from assistive tech. */
@Component({
  selector: 'app-ticker',
  template: `
    <div
      aria-hidden="true"
      class="bg-sun tilt-[-1.2deg] -mx-5 overflow-hidden text-[#1b1b1b] shadow-[0_4px_0_var(--shade)]"
    >
      <div class="ticker-run font-type inline-block whitespace-nowrap py-2.5 text-xl tracking-[0.06em]">
        @for (copy of copies; track copy) {
          @for (word of words; track word) {
            {{ word.toUpperCase() }} ✶
          }
        }
      </div>
    </div>
  `
})
export class Ticker {
  protected readonly words = WORDS;
  protected readonly copies = [0, 1, 2, 3];
}
