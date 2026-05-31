import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Clipboard } from '@angular/cdk/clipboard';

import { TooltipModule } from 'primeng/tooltip';

import { Toast } from '@core/services';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, TooltipModule],
  template: `
    <div class="flex flex-col items-start gap-8 lg:pb-8">
      <div class="flex animate-[fadeinleft_0.5s_ease-in] flex-col items-start gap-7">
        <span>// If you have any questions, please don't hesitate to contact me</span>
        <div class="typing-header">
          <p>{{ '{“' }}&nbsp;</p>
          <p class="typing-header__text type-contact"></p>
          <p>&nbsp;{{ '“}' }}</p>
        </div>
      </div>
      <div class="flex flex-col items-start gap-11 lg:gap-12">
        <div class="flex flex-col gap-2">
          <p class="animate-[fadeinleft_0.5s_ease-in] text-lavender-mauve">// my e-mail</p>
          <p class="animate-[zoomin_0.8s_ease-in] cursor-default text-anakiwa">
            const <span class="text-green-haze dark:text-screen-glow">email</span> =
            <span
              pTooltip="Click to copy my email"
              [showDelay]="200"
              [hideDelay]="200"
              tooltipPosition="bottom"
              class="cursor-pointer text-lavender-rose"
              (click)="onClick(email)"
              aria-hidden="true"
            >
              "{{ email }}"</span
            >;
          </p>
        </div>
        <div class="flex flex-col gap-2">
          <p class="animate-[fadeinleft_0.5s_ease-in] text-lavender-mauve">// my skype</p>
          <p class="animate-[zoomin_0.8s_ease-in] cursor-default text-anakiwa">
            const <span class="text-green-haze dark:text-screen-glow">skype</span> =
            <span
              pTooltip="Click to copy my skype"
              [showDelay]="200"
              [hideDelay]="200"
              tooltipPosition="bottom"
              class="cursor-pointer text-lavender-rose"
              (click)="onClick(skype)"
              aria-hidden="true"
            >
              "{{ skype }}"
            </span>
            ;
          </p>
        </div>
        <div class="flex flex-col gap-2">
          <p class="animate-[fadeinleft_0.5s_ease-in] text-lavender-mauve">// my linkedin</p>
          <p
            pTooltip="Click to view my linkedIn"
            [showDelay]="200"
            [hideDelay]="200"
            tooltipPosition="bottom"
            class="animate-[zoomin_0.8s_ease-in] cursor-default text-anakiwa"
          >
            const <span class="text-green-haze dark:text-screen-glow">linkedin</span> =
            <a class="text-lavender-rose" target="_blank" routerLink="linkedIn">"{{ linkedIn }}"</a>;
          </p>
        </div>
      </div>
    </div>
  `
})
export class Contact {
  private readonly _toastService = inject(Toast);
  private readonly _clipboardService = inject(Clipboard);

  protected readonly email = 'minhtuan92vt@gmail.com';
  protected readonly skype = 'tranminhtuan92';
  protected readonly linkedIn = 'https://www.linkedin.com/in/minhtuan92vt';

  onClick(val: string): void {
    this._toastService.info('Copied!');
    this._clipboardService.copy(val);
  }
}
