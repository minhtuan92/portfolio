import { Component } from '@angular/core';

interface Trait {
  label: string;
  text: string;
  /** Classes for the label tab: colour and tilt. */
  tab: string;
  rotate: string;
}

const TRAITS: readonly Trait[] = [
  {
    label: '_able',
    text: 'My strength lies in managing multiple tasks and thriving under pressure. I prioritise well, so work lands on time without compromising quality.',
    tab: 'bg-sun text-[#1b1b1b] tilt-[-3deg]',
    rotate: 'tilt-[-1.5deg]'
  },
  {
    label: '_innovative',
    text: "I'm always seeking out new ideas and better methods, researching and trying new strategies to optimise how the work gets done.",
    tab: 'bg-brick text-white tilt-[2deg]',
    rotate: 'tilt-[1.2deg]'
  },
  {
    label: '_team work',
    text: 'I value open communication and diverse perspectives, and build relationships on trust and reliability so every member feels able to contribute.',
    tab: 'bg-cobalt text-white tilt-[-2deg]',
    rotate: 'tilt-[-0.8deg]'
  },
  {
    label: '_flexible',
    text: "I approach each project with an open mind, ready to pivot strategies when needed, and I'm receptive to feedback and new ideas.",
    tab: 'bg-pine text-white tilt-[3deg]',
    rotate: 'tilt-[1.6deg]'
  }
];

const AI_USES: readonly Trait[] = [
  {
    label: 'every day',
    text: 'AI is part of my daily routine: drafting and summarising, researching unfamiliar topics, planning my tasks and turning rough notes into clear documents.',
    tab: 'bg-sun text-[#1b1b1b] tilt-[-3deg]',
    rotate: 'tilt-[1.2deg]'
  },
  {
    label: 'in my code',
    text: 'I pair-program with AI assistants such as Claude Code to scaffold features, refactor, write tests, review changes and keep the documentation current.',
    tab: 'bg-cobalt text-white tilt-[2deg]',
    rotate: 'tilt-[-1deg]'
  },
  {
    label: 'my rule',
    text: 'AI speeds me up, but I stay in charge: I read, test and understand every change before it ships.',
    tab: 'bg-brick text-white tilt-[-2deg]',
    rotate: 'tilt-[0.8deg]'
  }
];

@Component({
  selector: 'app-about',
  templateUrl: './about.html'
})
export class About {
  protected readonly traits = TRAITS;
  protected readonly aiUses = AI_USES;
}
