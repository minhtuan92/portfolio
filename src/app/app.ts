import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';

import { Theme } from '@core/services';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, ToastModule],
  template: `
    <router-outlet />
    <p-toast position="bottom-center" />
  `
})
export class App implements OnInit {
  private readonly _themeService = inject(Theme);

  ngOnInit(): void {
    this._themeService.updateTheme();
  }
}
