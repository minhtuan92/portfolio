import { Component } from '@angular/core';

import { Ticker } from '@ui/components';

@Component({
  selector: 'app-footer',
  imports: [Ticker],
  template: `
    <footer class="pb-6 pt-4">
      <app-ticker />
      <p class="font-type mt-5 text-center text-sm opacity-70">© 2026 Tuan Tran · Ho Chi Minh City</p>
    </footer>
  `
})
export class Footer {}
