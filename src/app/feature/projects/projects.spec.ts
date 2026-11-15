import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Projects } from './projects';

describe('Projects', () => {
  let fixture: ComponentFixture<Projects>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Projects],
      providers: [provideRouter([])]
    });
    fixture = TestBed.createComponent(Projects);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders a page heading', () => {
    expect(fixture.nativeElement.querySelector('h1')).toBeTruthy();
  });
});
