import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Piece {
  label: string;
  cls: string;
}

/** The headline, one pasted-on scrap per word. */
const HEADLINE: readonly Piece[] = [
  { label: 'I', cls: 'bg-paper text-paper-ink font-display text-[clamp(52px,6.4vw,96px)] px-3.5 tilt-[-3deg]' },
  { label: 'BUILD', cls: 'bg-brick text-white font-extrabold text-[clamp(46px,5.6vw,84px)] px-4 tilt-[2deg]' },
  { label: 'things', cls: 'bg-sun text-[#1b1b1b] font-type text-[clamp(40px,4.8vw,72px)] px-3.5 tilt-[-1deg]' },
  { label: 'for', cls: 'bg-pine text-white font-display text-[clamp(40px,4.8vw,72px)] px-3.5 tilt-[3deg]' },
  { label: 'the', cls: 'bg-cobalt text-white font-extrabold text-[clamp(40px,4.8vw,72px)] px-3.5 tilt-[-2deg]' },
  { label: 'WEB', cls: 'bg-paper text-paper-ink font-display text-[clamp(56px,7vw,106px)] px-4 tilt-[1deg]' }
];

const SKILLS: readonly Piece[] = [
  { label: 'Angular', cls: 'bg-paper text-paper-ink tilt-[-4deg]' },
  { label: 'RxJS', cls: 'bg-sun text-[#1b1b1b] tilt-[3deg]' },
  { label: 'TypeScript', cls: 'bg-cobalt text-white tilt-[-2deg]' },
  { label: 'TailwindCSS', cls: 'bg-paper text-paper-ink tilt-[4deg]' },
  { label: 'Java', cls: 'bg-pine text-white tilt-[-3deg]' },
  { label: 'Spring Boot', cls: 'bg-brick text-white tilt-[2deg]' },
  { label: 'AI-assisted', cls: 'bg-tag text-tag-ink tilt-[-2deg]' }
];

const TRAITS: readonly Piece[] = [
  { label: '_able', cls: 'bg-sun text-[#1b1b1b] tilt-[-4deg]' },
  { label: '_innovative', cls: 'bg-paper text-paper-ink tilt-[3deg]' },
  { label: '_team work', cls: 'bg-cobalt text-white tilt-[-2deg]' },
  { label: '_flexible', cls: 'bg-pine text-white tilt-[4deg]' }
];

const ROUTE = [
  { when: '2017', what: 'Automation QA' },
  { when: '2019', what: 'Backend Developer' },
  { when: 'NOW', what: 'Full-stack developer, Angular focused' }
] as const;

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html'
})
export class Home {
  protected readonly headline = HEADLINE;
  protected readonly skills = SKILLS;
  protected readonly traits = TRAITS;
  protected readonly route = ROUTE;
}
