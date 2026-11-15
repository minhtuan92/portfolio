import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { DarkmodeButton } from '@pattern/components';

interface NavItem {
  label: string;
  path: string;
}

const NAV: readonly NavItem[] = [
  { label: 'home', path: '/' },
  { label: 'about', path: '/about' },
  { label: 'skills', path: '/skills' },
  { label: 'resume', path: '/resume' },
  { label: 'projects', path: '/projects' },
  { label: 'contact', path: '/contact' }
];

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, DarkmodeButton],
  template: `
    <header class="flex flex-wrap items-center justify-between gap-x-6 gap-y-1.5 px-[clamp(20px,5vw,64px)] py-3">
      <a routerLink="/" class="drop bg-tag text-tag-ink tilt-[-2deg] px-3 font-extrabold leading-10 no-underline">
        TUAN TRAN
      </a>
      <nav
        aria-label="Pages"
        class="font-type ml-auto flex flex-wrap gap-x-[22px] text-base max-[640px]:order-3 max-[640px]:w-full max-[640px]:justify-between max-[640px]:gap-x-0 max-[640px]:text-sm max-[359px]:grid max-[359px]:grid-cols-3 max-[359px]:text-center"
      >
        @for (item of nav; track item.path) {
          <a
            [routerLink]="item.path"
            routerLinkActive="bg-sun px-2 !text-[#1b1b1b]"
            ariaCurrentWhenActive="page"
            [routerLinkActiveOptions]="{ exact: true }"
            class="leading-11 text-ink no-underline transition-[translate] duration-150 hover:-translate-y-0.5"
          >
            {{ item.label }}
          </a>
        }
      </nav>
      <app-darkmode-button class="max-[640px]:order-2" />
    </header>
  `
})
export class Header {
  protected readonly nav = NAV;
}
