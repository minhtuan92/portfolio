import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Resume } from './resume';

describe('Resume', () => {
  let fixture: ComponentFixture<Resume>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Resume],
      providers: [provideRouter([])]
    });
    fixture = TestBed.createComponent(Resume);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders a page heading', () => {
    expect(fixture.nativeElement.querySelector('h1')).toBeTruthy();
  });
});
