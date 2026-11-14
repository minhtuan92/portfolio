import { Component } from '@angular/core';

interface Stop {
  tag: string;
  title: string;
  text: string;
  bar: string;
  dot: string;
  rotate: string;
  current?: boolean;
}

const STOPS: readonly Stop[] = [
  {
    tag: 'NOW',
    title: 'Full-stack developer, Angular focused',
    text: 'Define code structure, code development, code deployment using CI/CD, technical documentation, maintenance works and training for new members. Troubleshoot and handle technical blocker issues. Use AI assistants every day for coding, code review, documentation and everyday tasks.',
    bar: 'bg-brick text-white',
    dot: 'bg-brick',
    rotate: 'tilt-[-0.8deg]',
    current: true
  },
  {
    tag: '2019',
    title: 'Backend Developer',
    text: 'Code development, code deployment and troubleshooting technical issues. Directly involved in implementation phases.',
    bar: 'bg-cobalt text-white',
    dot: 'bg-cobalt',
    rotate: 'tilt-[0.7deg]'
  },
  {
    tag: '2017',
    title: 'Automation QA',
    text: 'Define code structure and technology stack. Develop new automation tests and maintenance works. Troubleshoot issues and training for new members.',
    bar: 'bg-pine text-white',
    dot: 'bg-pine',
    rotate: 'tilt-[-0.5deg]'
  }
];

const STAMPS = [
  { when: 'Q4 · 2023', cls: 'tilt-[-10deg]', delay: 1.4 },
  { when: 'Q2 · 2018', cls: 'tilt-[8deg]', delay: 1.7 }
] as const;

@Component({
  selector: 'app-resume',
  templateUrl: './resume.html'
})
export class Resume {
  protected readonly stops = STOPS;
  protected readonly stamps = STAMPS;
}
