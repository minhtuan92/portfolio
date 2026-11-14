import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Footer } from '../components/footer/footer';
import { Header } from '../components/header/header';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Header, Footer],
  template: `
    <div class="flex min-h-dvh flex-col overflow-x-clip">
      <app-header />
      <main class="flex flex-1 flex-col">
        <router-outlet />
      </main>
      <app-footer />
    </div>
  `
})
export class MainLayout {}
