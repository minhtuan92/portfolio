
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { BadgeModule } from 'primeng/badge';

import { TechCardItem } from '@shared/models';

@Component({
    selector: 'app-tech-card',
    imports: [AngularSvgIconModule, BadgeModule],
    templateUrl: './tech-card.component.html',
    styleUrl: './tech-card.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TechCardComponent {
  item = input.required<TechCardItem>();

  styleClass = input<string | undefined>('lg:h-[18.75rem] lg:w-[20.625rem]');
}
