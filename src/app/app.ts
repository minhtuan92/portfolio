import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Theme } from '@core/services';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<router-outlet />`
})
export class App implements OnInit {
  private readonly theme = inject(Theme);

  ngOnInit(): void {
    this.theme.updateTheme();
  }
}
