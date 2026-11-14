import { Component } from '@angular/core';

interface ContactLink {
  label: string;
  text: string;
  href: string;
  /** Classes for the card: colour, tilt, delay. */
  card: string;
  /** Classes for the big text. */
  big: string;
}

const LINKS: readonly ContactLink[] = [
  {
    label: 'E-MAIL',
    text: 'minhtuan92vt@gmail.com',
    href: 'mailto:minhtuan92vt@gmail.com',
    card: 'bg-sun text-[#1b1b1b] tilt-[-1.5deg] [animation-delay:.4s] pt-[26px] pb-[22px]',
    big: 'font-display text-[clamp(26px,3vw,40px)] max-[640px]:text-[5.6vw]'
  },
  {
    label: 'LINKEDIN',
    text: 'linkedin.com/in/minhtuan92vt',
    href: 'https://www.linkedin.com/in/minhtuan92vt/',
    card: 'bg-cobalt text-white tilt-[1.2deg] [animation-delay:.55s] pt-6 pb-[22px]',
    big: 'font-extrabold text-[clamp(20px,2.2vw,30px)] max-[640px]:text-[4.2vw]'
  },
  {
    label: 'GITHUB',
    text: 'github.com/minhtuan92',
    href: 'https://github.com/minhtuan92',
    card: 'bg-tag text-tag-ink tilt-[-0.8deg] [animation-delay:.7s] pt-6 pb-[22px]',
    big: 'font-type text-[clamp(24px,2.8vw,36px)] max-[640px]:text-[5.4vw]'
  }
];

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html'
})
export class Contact {
  protected readonly links = LINKS;
}
