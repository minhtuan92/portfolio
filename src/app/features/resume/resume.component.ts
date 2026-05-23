import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { LayoutService } from '@core/services';

@Component({
    selector: 'app-resume',
    imports: [CommonModule, AngularSvgIconModule],
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  layoutService = inject(LayoutService);
}
