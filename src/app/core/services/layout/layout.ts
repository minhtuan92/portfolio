import { Injectable, computed, inject } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { ScreenSize } from '@core/constants';

const DisplayNameMap = new Map([
  [Breakpoints.HandsetPortrait, ScreenSize.HANDSET_PORTRAIT],
  [Breakpoints.TabletPortrait, ScreenSize.TABLET_PORTRAIT],
  [Breakpoints.WebPortrait, ScreenSize.WEB_PORTRAIT],
  [Breakpoints.HandsetLandscape, ScreenSize.HANDSET_LANDSCAPE],
  [Breakpoints.TabletLandscape, ScreenSize.TABLET_LANDSCAPE],
  [Breakpoints.WebLandscape, ScreenSize.WEB_LANDSCAPE]
]);

@Injectable({
  providedIn: 'root'
})
export class Layout {
  private readonly _breakpointObserver = inject(BreakpointObserver);

  private readonly _breakpointQueries = toSignal(
    this._breakpointObserver.observe([...DisplayNameMap.keys()]).pipe(takeUntilDestroyed())
  );

  readonly currentScreenSize = computed(() => {
    const queries = this._breakpointQueries();
    const activeEntry = Object.entries(queries?.breakpoints ?? {}).find(([, active]) => active);
    return activeEntry ? (DisplayNameMap.get(activeEntry[0]) ?? ScreenSize.UNKNOW) : ScreenSize.WEB_LANDSCAPE;
  });

  readonly isMobile = computed(() => {
    const size = this.currentScreenSize();
    return size !== ScreenSize.TABLET_LANDSCAPE && size !== ScreenSize.WEB_LANDSCAPE;
  });
}
