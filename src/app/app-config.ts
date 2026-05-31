import { ApplicationConfig, importProvidersFrom, provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { AngularSvgIconModule } from 'angular-svg-icon';
import { providePrimeNG } from 'primeng/config';
import { MessageService } from 'primeng/api';
import Aura from '@primeng/themes/aura';

import { routes } from './app-routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    importProvidersFrom(AngularSvgIconModule.forRoot()),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes),
    providePrimeNG({ theme: { preset: Aura } }),
    MessageService
  ]
};
