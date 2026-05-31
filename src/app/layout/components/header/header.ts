import { ChangeDetectionStrategy, Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

import { Layout } from '@core/services';
import { DarkmodeButton } from '@pattern/components';

const MENU: MenuItem[] = [
  {
    id: '1',
    label: '_home',
    routerLink: '/',
    routerLinkActiveOptions: { exact: true }
  },
  {
    id: '2',
    label: '_about',
    routerLink: 'about'
  },
  {
    id: '3',
    label: '_skills',
    routerLink: 'skills'
  },
  {
    id: '4',
    label: '_resume',
    routerLink: 'resume'
  },
  {
    id: '5',
    label: '_projects',
    routerLink: 'projects'
  },
  {
    id: '6',
    label: '_contact',
    routerLink: 'contact'
  }
] as const;

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterLink, RouterLinkActive, AngularSvgIconModule, DarkmodeButton, MenuModule],
  styleUrls: ['./header.css'],
  template: `
    @let isMobile = layoutService.isMobile();
    @let screenSize = layoutService.currentScreenSize();

    <header
      [ngClass]="isMobile ? 'w-screen md:pl-24 md:pr-10' : 'w-[calc(100%-var(--sidebar-width))]'"
      class="h-(--header-height) fixed top-0 z-10 flex items-center justify-between border-b border-[rgba(34,49,79,0.10)] backdrop-blur-[0.125rem] transition-colors dark:border-manganese-black dark:bg-[rgba(24,24,29,0.6)] lg:px-0"
    >
      <a
        class="flex h-full flex-col items-center justify-center px-4 leading-none lg:px-6"
        [routerLink]="['/']"
        [routerLinkActiveOptions]="{ exact: true }"
        [routerLinkActive]="isMobile ? 'router-link-active' : ''"
      >
        <p>// Tuan Tran</p>
        @if (!isMobile) {
          <p class="text-green-haze dark:text-screen-glow">&nbsp;web_dev</p>
        }
      </a>
      @if (!isMobile) {
        <nav class="navigation flex h-full grow justify-between">
          <div class="flex items-center">
            @for (nav of mainNav(); track nav.id) {
              <a
                class="flex h-full items-center justify-center border-l border-[rgba(34,49,79,0.10)] px-6 last:border-r hover:bg-iron/20 dark:border-manganese-black dark:hover:bg-manganese-black"
                [routerLink]="[nav.routerLink]"
                [routerLinkActiveOptions]="{ exact: true }"
                routerLinkActive="router-link-active"
              >
                {{ nav.label }}
              </a>
            }
          </div>
          <a
            class="flex items-center justify-center border-l border-[rgba(34,49,79,0.10)] px-6 hover:bg-iron/20 dark:border-manganese-black dark:hover:bg-manganese-black"
            [routerLink]="[contactNav().routerLink]"
            [routerLinkActiveOptions]="{ exact: true }"
            routerLinkActive="router-link-active"
          >
            {{ contactNav().label }}
          </a>
        </nav>
      } @else {
        <div class="control-btn flex">
          <app-darkmode-button></app-darkmode-button>
          <button
            type="button"
            title="Menu"
            class="relative inline-flex items-center p-4.5"
            (click)="toggleMenu(); menu.toggle($event)"
          >
            <svg-icon
              [applyClass]="true"
              viewBox="auto"
              src="assets/icons/svg/menu.svg"
              [ngClass]="!isMenuShow() ? 'rotate-0 scale-100' : 'rotate-90 scale-0'"
              class="h-6 w-6 stroke-dark-knight transition-all duration-300 dark:stroke-pastel-placebo"
            >
            </svg-icon>
            <svg-icon
              [applyClass]="true"
              viewBox="auto"
              src="assets/icons/svg/close.svg"
              [ngClass]="!isMenuShow() ? '-rotate-90 scale-0' : 'rotate-0 scale-100'"
              class="absolute h-6 w-6 stroke-dark-knight transition-all duration-300 dark:stroke-pastel-placebo"
            >
            </svg-icon>
          </button>
        </div>
      }
    </header>
    <p-menu
      #menu
      [model]="navigations()"
      [popup]="true"
      [styleClass]="
        '!bg-pastel-placebo/80 dark:!bg-dark-knight/80 !backdrop-blur-lg flex flex-col items-center justify-center ' +
        (screenSize.includes('Handset') ? 'w-full h-dvh' : '')
      "
      (onHide)="setIsMenuShow(false)"
    >
    </p-menu>
    @if (screenSize.includes('Handset') && isMenuShow()) {
      <button
        type="button"
        title="Close Menu"
        class="z-9999 absolute right-4 top-4 inline-flex animate-zoomin items-center rounded-full p-3 shadow-xl"
        (click)="toggleMenu(); menu.toggle($event)"
      >
        <svg-icon
          [applyClass]="true"
          viewBox="auto"
          src="assets/icons/svg/close.svg"
          class="h-7 w-7 stroke-dark-knight dark:stroke-pastel-placebo"
        >
        </svg-icon>
      </button>
    }
  `
})
export class Header {
  protected readonly layoutService = inject(Layout);

  protected readonly navigations = signal(MENU);
  protected readonly isMenuShow = signal(false);

  protected readonly mainNav = computed(() => this.navigations().slice(0, -1));
  protected readonly contactNav = computed(() => this.navigations().slice(-1)[0]);

  toggleMenu(): void {
    this.isMenuShow.set(!this.isMenuShow());
  }

  setIsMenuShow(value: boolean): void {
    this.isMenuShow.set(value);
  }
}
