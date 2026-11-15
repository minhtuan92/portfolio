import { Component, computed, input } from '@angular/core';

export interface ProjectTag {
  label: string;
  /** Main technologies are highlighted in yellow. */
  main?: boolean;
}

export interface ProjectItem {
  no: string;
  title: string;
  summary: string;
  /** What Tuan did on the project. */
  role?: string;
  tags: readonly ProjectTag[];
  /** Classes for the strip of tape holding the card: colour and tilt. */
  tape?: string;
  /** Classes that tilt the card. */
  tilt: string;
  /** Seconds before the card drops in. */
  delay: number;
}

/** One pinned-up project card. `compact` renders the smaller note used for older work. */
@Component({
  selector: 'app-project',
  template: `
    @let p = item();
    @if (compact()) {
      <article
        class="drop scrap bg-note text-note-ink shade-md px-[22px] py-5"
        [class]="p.tilt"
        [style.animation-delay.s]="p.delay"
      >
        <div class="font-type text-brick text-sm tracking-[0.08em]">No. {{ p.no }}</div>
        <h3 class="font-display mb-2 mt-1 text-2xl font-normal leading-[1.15]">{{ p.title }}</h3>
        <p class="mb-3 text-[15px] leading-[1.6]">{{ p.summary }}</p>
        <div class="font-type text-sm">{{ techLine() }}</div>
      </article>
    } @else {
      <article
        class="drop scrap bg-paper text-paper-ink shade-md relative px-6 pb-6 pt-8"
        [class]="p.tilt"
        [style.animation-delay.s]="p.delay"
      >
        <span aria-hidden="true" class="sway absolute left-[36%] top-[-14px] h-7 w-[28%]" [class]="p.tape"></span>
        <div class="font-type text-brick text-sm tracking-[0.08em]">No. {{ p.no }}</div>
        <h3 class="font-display mb-2.5 mt-1 text-[32px] font-normal leading-[1.1]">{{ p.title }}</h3>
        <p class="font-type mb-2.5 text-base leading-[1.6]">{{ p.summary }}</p>
        @if (p.role) {
          <p class="mb-4 text-[15px] leading-[1.6]">{{ p.role }}</p>
        }
        <ul
          class="tags font-type m-0 flex list-none flex-wrap gap-2 p-0 text-sm"
          [style.--tag-delay]="p.delay + 0.7 + 's'"
        >
          @for (tag of p.tags; track tag.label) {
            <li class="px-[9px] py-[3px]" [class]="tag.main ? 'bg-sun text-[#1b1b1b]' : 'bg-note text-note-ink'">
              {{ tag.label }}
            </li>
          }
        </ul>
      </article>
    }
  `
})
export class Project {
  readonly item = input.required<ProjectItem>();
  readonly compact = input(false);

  protected readonly techLine = computed(() =>
    this.item()
      .tags.map((tag) => tag.label)
      .join(' · ')
  );
}
