import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { SVG_ICON_REGISTRY_PROVIDER, SvgHttpLoader, SvgLoader } from 'angular-svg-icon';

import { Footer } from './footer';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Footer],
      providers: [
        SVG_ICON_REGISTRY_PROVIDER,
        { provide: SvgLoader, useClass: SvgHttpLoader },
        provideHttpClient(withInterceptorsFromDi())
      ]
    });
    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
