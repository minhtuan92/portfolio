import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Home } from './home';

describe('Home', () => {
  let fixture: ComponentFixture<Home>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Home],
      providers: [provideRouter([])]
    });
    fixture = TestBed.createComponent(Home);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders a page heading', () => {
    expect(fixture.nativeElement.querySelector('h1')).toBeTruthy();
  });
});
