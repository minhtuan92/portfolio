import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Skills } from './skills';

describe('Skills', () => {
  let fixture: ComponentFixture<Skills>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Skills],
      providers: [provideRouter([])]
    });
    fixture = TestBed.createComponent(Skills);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders a page heading', () => {
    expect(fixture.nativeElement.querySelector('h1')).toBeTruthy();
  });
});
