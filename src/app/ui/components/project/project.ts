import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { Layout } from '@core/services';
import { ProjectItem } from '@core/models';

@Component({
  selector: 'app-project',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AngularSvgIconModule],
  template: `
    @let isMobile = layoutService.isMobile();
    <div class="flex flex-col gap-2 transition duration-300 lg:gap-4">
      <p class="text-burnt-sienna">
        Project: <span class="text-green-haze dark:text-screen-glow">{{ project().shortName }}</span>
      </p>
      <div
        class="flex w-full justify-between rounded-3xl border border-gallery bg-concrete px-6 py-8 dark:border-tuna dark:bg-mirage lg:flex-row lg:gap-64 lg:px-14"
      >
        <div class="flex grow flex-col gap-4 md:gap-6">
          <div class="text-xl font-medium leading-normal text-rangoon-green dark:text-white lg:text-3xl">
            <span>{{ project().name }}</span>
          </div>
          <div class="text-dark-gray dark:text-ucla-blue lg:text-[1.625rem] lg:leading-7">
            <span class="whitespace-pre-line">{{ project().desc }}</span>
          </div>
        </div>
        @if (project().image && !isMobile) {
          @if (!project().image?.endsWith('.svg')) {
            <img class="w-96" [src]="project().image" alt="Project" />
          } @else {
            <svg-icon
              [applyClass]="true"
              viewBox="auto"
              [src]="project().image!"
              class="h-auto w-96 fill-lavender-mauve stroke-2 dark:fill-pastel-placebo"
            >
            </svg-icon>
          }
        }
      </div>
    </div>
  `
})
export class Project {
  protected readonly layoutService = inject(Layout);

  readonly project = input.required<ProjectItem>();
}
