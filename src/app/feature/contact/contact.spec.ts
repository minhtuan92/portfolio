import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageService } from 'primeng/api';

import { Contact } from './contact';

describe('Contact', () => {
  let component: Contact;
  let fixture: ComponentFixture<Contact>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Contact],
      providers: [MessageService]
    });
    fixture = TestBed.createComponent(Contact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
