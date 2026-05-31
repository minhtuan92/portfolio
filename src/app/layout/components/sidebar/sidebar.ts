import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { ScreenSize } from '@core/constants';
import { Layout } from '@core/services';

@Component({
  selector: 'app-sidebar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    @let isMobile = layoutService.isMobile();
    @if (!isMobile) {
      <div
        class="sidebar w-(--sidebar-width) flex h-dvh cursor-default flex-col gap-1 border-r border-[rgba(34,49,79,0.10)] px-5 py-4.5 text-xl leading-[1.125rem] text-lavender-mauve transition-colors duration-300 dark:border-manganese-black"
      >
        <div class="flex flex-col gap-1.5 overflow-hidden">
          @for (lineNumber of lineNumbers(); track lineNumber) {
            <span>
              {{ lineNumber }}
            </span>
          }
        </div>
      </div>
    }
  `
})
export class Sidebar {
  protected readonly layoutService = inject(Layout);

  protected readonly lineNumbers = computed<number[]>(() => {
    return this.calculateLineNumbers(this.layoutService.currentScreenSize());
  });

  private calculateLineNumbers(screenSize: string): number[] {
    const screenHeight = window.outerHeight;
    const lineHeight = screenSize === ScreenSize.TABLET_LANDSCAPE || screenSize === ScreenSize.WEB_LANDSCAPE ? 8 : 24;
    const zoom = Math.round((window.outerWidth / window.innerWidth) * 100) / 100;
    const maxLineNumbers = Math.floor(Math.floor(screenHeight / lineHeight) / zoom);
    return Array.from({ length: maxLineNumbers }, (_, index) => index + 1);
  }
}
