import { Component } from '@angular/core';

interface Piece {
  label: string;
  cls: string;
}

interface SkillGroup {
  title: string;
  tape: string;
  rotate: string;
  /** Spans the full row of the grid. */
  wide?: boolean;
  items: readonly { label: string; cls: string }[];
}

const MAIN_STACK: readonly Piece[] = [
  { label: 'Angular', cls: 'bg-brick text-white font-extrabold text-[clamp(34px,4.4vw,62px)] px-[22px] tilt-[-2deg]' },
  { label: 'RxJS', cls: 'bg-sun text-[#1b1b1b] font-type text-[clamp(30px,3.8vw,54px)] px-5 tilt-[3deg]' },
  { label: 'TypeScript', cls: 'bg-paper text-paper-ink font-display text-[clamp(32px,4vw,58px)] px-5 tilt-[-1deg]' },
  { label: 'Java', cls: 'bg-pine text-white font-extrabold text-[clamp(28px,3.4vw,48px)] px-5 tilt-[2deg]' },
  { label: 'Spring Boot', cls: 'bg-tag text-tag-ink font-type text-[clamp(28px,3.4vw,48px)] px-5 tilt-[-3deg]' }
];

const rot = ['tilt-[-2deg]', 'tilt-[2deg]', 'tilt-[-1deg]', 'tilt-[3deg]', 'tilt-[-3deg]', 'tilt-[1deg]'];

/** Builds the chips of a group; the names listed in `main` are highlighted in yellow. */
function tags(labels: string, main: string[] = []): SkillGroup['items'] {
  return labels.split(',').map((label, i) => ({
    label,
    cls: `${main.includes(label) ? 'bg-sun text-[#1b1b1b]' : 'bg-paper text-paper-ink'} ${rot[i % rot.length]}`
  }));
}

const GROUPS: readonly SkillGroup[] = [
  {
    title: 'Front end',
    tape: 'bg-[rgb(47_111_214_/_0.75)] tilt-[-3deg]',
    rotate: 'tilt-[-1.2deg]',
    items: tags('Angular,RxJS,TypeScript,JavaScript,TailwindCSS,SASS,PostCSS,Bootstrap,Material UI', [
      'Angular',
      'TailwindCSS'
    ])
  },
  {
    title: 'Back end',
    tape: 'bg-[rgb(31_122_92_/_0.75)] tilt-[2deg]',
    rotate: 'tilt-[1deg]',
    items: tags('Java,Spring Boot,Node.js,ExpressJS,.NET Core,C#,Entity Framework', ['Java', 'Spring Boot'])
  },
  {
    title: 'Data & messaging',
    tape: 'bg-[rgb(179_38_30_/_0.75)] tilt-[-2deg]',
    rotate: 'tilt-[-0.6deg]',
    items: tags('PostgreSQL,MySQL,MongoDB,DynamoDB,Redis,Kafka')
  },
  {
    title: 'Tools & testing',
    tape: 'bg-[rgb(255_225_77_/_0.9)] tilt-[3deg]',
    rotate: 'tilt-[1.4deg]',
    items: tags('Docker,Git,GitLab,SonarQube,Cypress,Selenium,Firebase')
  },
  {
    title: 'AI-assisted work',
    tape: 'bg-[rgb(47_111_214_/_0.75)] tilt-[-2deg]',
    rotate: 'tilt-[-0.5deg]',
    wide: true,
    items: tags('Claude Code,MCP,Prompt design,AI code review,Test generation,Documentation', ['Claude Code'])
  }
];

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html'
})
export class Skills {
  protected readonly mainStack = MAIN_STACK;
  protected readonly groups = GROUPS;
}
