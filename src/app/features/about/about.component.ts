import { Component, inject } from '@angular/core';

import { LayoutService } from '@core/services';

@Component({
    selector: 'app-about',
    imports: [],
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent {
  layoutService = inject(LayoutService);
}
