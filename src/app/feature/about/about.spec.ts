import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { About } from './about';

describe('About', () => {
  let fixture: ComponentFixture<About>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [About],
      providers: [provideRouter([])]
    });
    fixture = TestBed.createComponent(About);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders a page heading', () => {
    expect(fixture.nativeElement.querySelector('h1')).toBeTruthy();
  });
});
