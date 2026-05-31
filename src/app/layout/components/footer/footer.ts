import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { DarkmodeButton } from '../../../pattern/components';
import { Layout } from '@core/services';

interface SocialApp {
  icon: string;
  link: string;
}

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterLink, AngularSvgIconModule, DarkmodeButton],
  template: `
    @let isMobile = layoutService.isMobile();
    <footer
      [class]="
        isMobile
          ? 'w-full flex-col gap-10 px-6 text-xl/6'
          : 'z-7 h-(--header-height) fixed bottom-0 w-[calc(100%-var(--sidebar-width))] text-2xl'
      "
      class="flex items-center border-none bg-alabaster/60 font-normal backdrop-blur-[0.125rem] transition-colors duration-300 dark:bg-[rgba(24,24,29,0.30)]"
    >
      <div
        [class]="isMobile ? 'flex-col gap-10' : 'h-full gap-6 border-t pl-8'"
        class="flex items-center border-[rgba(34,49,79,0.10)] dark:border-manganese-black"
      >
        <p class="flex h-full items-center justify-center pr-6">find me at</p>
        <nav class="social-nav flex h-full items-center">
          @for (socialApp of socialApps; track socialApp; let i = $index) {
            <a
              [class]="isMobile ? '' : 'border-l last:border-r'"
              class="flex h-full items-center justify-center border-[rgba(34,49,79,0.10)] px-6 hover:bg-iron/20 dark:border-manganese-black dark:hover:bg-manganese-black"
              routerLink="'socialApp.link'"
              target="_blank"
            >
              <svg-icon
                [applyClass]="true"
                viewBox="auto"
                [src]="'assets/icons/svg/' + socialApp.icon + '.svg'"
                [class]="isMobile ? 'h-10 w-10' : 'h-6 w-6'"
                class="fill-lavender-mauve stroke-2 dark:fill-pastel-placebo"
              >
              </svg-icon>
            </a>
          }
        </nav>
      </div>
      @if (!isMobile) {
        <div class="h-full flex-1 border-t border-[rgba(34,49,79,0.10)] dark:border-manganese-black"></div>
      }
      <div
        [class]="isMobile ? 'flex-col' : 'border-l border-t border-[rgba(34,49,79,0.10)] dark:border-manganese-black'"
        class="flex h-full items-center justify-center"
      >
        @if (!isMobile) {
          <app-darkmode-button></app-darkmode-button>
        }
        <span
          [class]="isMobile ? 'flex-col' : 'border-l border-[rgba(34,49,79,0.10)] dark:border-manganese-black'"
          class="flex h-full items-center justify-center px-6"
        >
          <p>© 2026 Tuan Tran.&nbsp;</p>
          <p>Design & Code with ❤️️</p>
        </span>
      </div>
    </footer>
  `
})
export class Footer {
  protected readonly layoutService = inject(Layout);
  protected readonly socialApps: SocialApp[] = [
    {
      icon: 'linkedIn',
      link: 'https://www.linkedin.com/in/minhtuan92vt/'
    },
    {
      icon: 'facebook',
      link: 'https://www.facebook.com/lupin.arsene.9'
    },
    {
      icon: 'github',
      link: 'https://github.com/minhtuan92'
    }
  ] as const;
}
