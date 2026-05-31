import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { ScrollTopModule } from 'primeng/scrolltop';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { ThemeOptions } from '@core/constants';
import { Layout, Theme } from '@core/services';

import { Footer } from '../components/footer/footer';
import { Header } from '../components/header/header';
import { Sidebar } from '../components/sidebar/sidebar';

@Component({
  selector: 'app-main-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    RouterOutlet,
    OverlayscrollbarsModule,
    ScrollTopModule,
    AngularSvgIconModule,
    Footer,
    Header,
    Sidebar
  ],
  template: `
    @let isMobile = layoutService.isMobile();
    <div
      class="z-10 flex h-dvh flex-row overflow-hidden bg-alabaster/60 backdrop-blur-[0.125rem] transition duration-300 dark:bg-dark-knight"
    >
      <div class="background-gradient h-150 absolute left-0 top-0 w-full overflow-hidden">
        <div
          class="z-9 w-104 absolute left-36 top-9 h-20 rounded-[55.9rem] bg-[rgba(224,170,28,0.43)] blur-[3.4rem] md:left-[53.63rem] md:top-[-4.2rem] md:h-[9.4rem] md:w-[55.9rem]"
        ></div>
        <div
          class="z-9 absolute -top-12 left-8 h-[9.7rem] w-[23.9rem] rounded-[51.4rem] bg-[rgba(116,210,101,0.35)] blur-[6.3rem] md:left-[39.4rem] md:top-[-5.6rem] md:h-[17.9rem] md:w-[51.4rem]"
        ></div>
        <div
          class="z-9 absolute -left-44 -top-9 h-[6.6rem] w-[26.7rem] rounded-[57.4rem] bg-[rgba(63,100,233,0.43)] blur-[3.4rem] md:left-[10.8rem] md:top-[-4.25rem] md:h-[12.2rem] md:w-[57.4rem]"
        ></div>
      </div>
      <div class="z-10">
        <app-sidebar />
      </div>
      <div
        [ngClass]="isMobile ? 'w-full' : 'md:w-full lg:w-auto'"
        class="flex h-full flex-col lg:flex-1 lg:justify-between"
      >
        <app-header />
        <div
          overlay-scrollbars
          [options]="{
            overflow: { x: 'hidden' },
            scrollbars: { autoHide: 'leave', autoHideDelay: 100, theme: scrollbarTheme() }
          }"
          [ngClass]="
            layoutService.isMobile()
              ? 'h-[calc(100%-var(--header-height))] px-4 pt-14 md:px-28 md:pt-20'
              : 'h-[calc(100%-var(--header-height)*2)] px-32 py-20 lg:px-44 lg:py-28'
          "
          class="content z-8 translate-y-(--header-height) w-full lg:translate-y-0"
        >
          <div class="flex h-full flex-col justify-between">
            <div>
              <router-outlet></router-outlet>
            </div>
            @if (isMobile) {
              <div
                class="-mx-4 mt-16 border-t border-[rgba(34,49,79,0.10)] pb-16 pt-10 dark:border-manganese-black md:-mx-28"
              >
                <app-footer></app-footer>
              </div>
            }
          </div>
          <p-scrollTop target="parent" styleClass="fixed dark:bg-manganese-black bg-pastel-placebo">
            <ng-template pTemplate="icon">
              <svg-icon
                [applyClass]="true"
                viewBox="auto"
                src="assets/icons/svg/chevron-up.svg"
                class="h-6 w-6 stroke-manganese-black dark:stroke-pastel-placebo"
              >
              </svg-icon>
            </ng-template>
          </p-scrollTop>
        </div>
        @if (!isMobile) {
          <app-footer />
        }
      </div>
    </div>
  `
})
export class MainLayout {
  private readonly themeService = inject(Theme);
  protected readonly layoutService = inject(Layout);

  protected readonly scrollbarTheme = computed(
    () => `os-theme-${this.themeService.currentTheme() === ThemeOptions.DARK ? ThemeOptions.LIGHT : ThemeOptions.DARK}`
  );
}
