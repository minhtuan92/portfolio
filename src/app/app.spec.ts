import { TestBed } from '@angular/core/testing';

import { MessageService } from 'primeng/api';

import { App } from './app';

describe('App', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [App],
      providers: [MessageService]
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
