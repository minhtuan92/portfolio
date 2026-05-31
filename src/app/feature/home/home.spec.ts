import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { SVG_ICON_REGISTRY_PROVIDER, SvgHttpLoader, SvgLoader } from 'angular-svg-icon';

import { Home } from './home';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Home],
      providers: [
        SVG_ICON_REGISTRY_PROVIDER,
        { provide: SvgLoader, useClass: SvgHttpLoader },
        provideHttpClient(withInterceptorsFromDi())
      ]
    });
    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
