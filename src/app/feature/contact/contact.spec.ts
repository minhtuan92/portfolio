import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Contact } from './contact';

describe('Contact', () => {
  let fixture: ComponentFixture<Contact>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Contact],
      providers: [provideRouter([])]
    });
    fixture = TestBed.createComponent(Contact);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders a page heading', () => {
    expect(fixture.nativeElement.querySelector('h1')).toBeTruthy();
  });
});
