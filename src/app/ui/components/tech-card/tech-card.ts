import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { BadgeModule } from 'primeng/badge';

import { TechCardItem } from '@core/models';

@Component({
  selector: 'app-tech-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AngularSvgIconModule, BadgeModule],
  template: `
    <div
      [class]="
        'flex flex-row gap-6 rounded-xl border border-gallery bg-concrete p-3.5 transition duration-300 dark:border-tuna dark:bg-mirage lg:flex-col lg:gap-10 lg:px-6 lg:pb-6 lg:pt-[5.8125rem] ' +
        styleClass()
      "
    >
      <div class="flex items-center justify-center">
        <svg-icon
          [applyClass]="true"
          viewBox="auto"
          [src]="item().image"
          class="lg:h-28.5 lg:w-28.5 h-16 w-16 fill-lavender-mauve stroke-2 dark:fill-pastel-placebo"
        >
        </svg-icon>
      </div>
      <div class="flex grow items-center justify-between">
        <span
          class="truncate font-normal text-rangoon-green transition duration-300 dark:text-white lg:text-[1.625rem] lg:leading-7"
          >{{ item().label }}</span
        >
        <p-badge
          [value]="item().type"
          styleClass="py-1.5 px-3 flex h-7 rounded-[1.625rem] items-center justify-center bg-white/70 transition duration-300 dark:bg-rangoon-green text-sm leading-normal font-normal text-dark-gray"
        ></p-badge>
      </div>
    </div>
  `
})
export class TechCard {
  readonly item = input.required<TechCardItem>();
  readonly styleClass = input<string>('lg:h-[18.75rem] lg:w-[20.625rem]');
}
