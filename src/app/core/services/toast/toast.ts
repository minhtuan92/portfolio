import { Injectable, inject } from '@angular/core';
import { MessageService } from 'primeng/api';

import { ToastSeverity } from '@core/constants';

@Injectable({
  providedIn: 'root'
})
export class Toast {
  private readonly _messageService = inject(MessageService);

  success(detail: string, life?: number, summary?: string): void {
    this.toast(ToastSeverity.SUCCESS, summary, detail, life);
  }

  info(detail: string, life?: number, summary?: string): void {
    this.toast(ToastSeverity.INFO, summary, detail, life);
  }

  warn(detail: string, life?: number, summary?: string): void {
    this.toast(ToastSeverity.WARN, summary, detail, life);
  }

  error(detail: string, life?: number, summary?: string): void {
    this.toast(ToastSeverity.ERROR, summary, detail, life);
  }

  toast(severity: string, summary?: string, detail?: string, life: number = 3000): void {
    return this._messageService.add({
      severity,
      summary,
      detail,
      life
    });
  }
}
