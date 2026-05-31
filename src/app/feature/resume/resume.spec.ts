import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { SVG_ICON_REGISTRY_PROVIDER, SvgHttpLoader, SvgLoader } from 'angular-svg-icon';

import { Resume } from './resume';

describe('ResumeComponent', () => {
  let component: Resume;
  let fixture: ComponentFixture<Resume>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Resume],
      providers: [
        SVG_ICON_REGISTRY_PROVIDER,
        { provide: SvgLoader, useClass: SvgHttpLoader },
        provideHttpClient(withInterceptorsFromDi())
      ]
    });
    fixture = TestBed.createComponent(Resume);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
