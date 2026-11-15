import { Component } from '@angular/core';

import { Project, ProjectItem, ProjectTag } from '@ui/components';

/** `*name` marks a main technology. */
function tags(...names: string[]): ProjectTag[] {
  return names.map((name) => (name.startsWith('*') ? { label: name.slice(1), main: true } : { label: name }));
}

const FEATURED: readonly ProjectItem[] = [
  {
    no: '01',
    title: 'Enterprise Device Management',
    summary:
      'A cloud platform that lets IT teams enrol, secure and manage every company device, from phones and tablets to laptops, in a single console.',
    role: 'Back-end development on an event-driven platform: Spring Boot services on AWS that talk through SQS and Kafka, with OpenSearch keeping large device fleets searchable.',
    tags: tags('*spring boot', '*java', 'aws', 'SQS', 'kafka', 'openSearch'),
    tape: 'bg-[rgb(179_38_30_/_0.75)] tilt-[2deg]',
    tilt: 'tilt-[0.9deg]',
    delay: 0.2
  },
  {
    no: '02',
    title: 'Communication Module',
    summary:
      'The communication hub of a finance management system: processes, tasks, contacts, documents, letters and real-time chat in one place.',
    role: 'Full-stack development: Angular and TailwindCSS on the front end, Spring Boot behind it, Keycloak for sign-in, Matrix (Synapse) for chat and Kafka for queueing.',
    tags: tags('*angular', '*spring boot', 'tailwindCSS', 'keycloak', 'synapse (matrix)', 'kafka'),
    tape: 'bg-[rgb(31_122_92_/_0.75)] tilt-[-3deg]',
    tilt: 'tilt-[-0.8deg]',
    delay: 0.25
  },
  {
    no: '03',
    title: 'Formbuilder',
    summary: 'An application to build forms from a JSON schema.',
    role: 'Discussed with clients to clarify their high-level design, performed front-end development, troubleshot and handled technical blocker issues.',
    tags: tags('*angular', 'typescript', 'tailwindCSS', 'bootstrap', 'SCSS', 'sonarqube'),
    tape: 'bg-[rgb(255_225_77_/_0.9)] tilt-[-3deg]',
    tilt: 'tilt-[-1deg]',
    delay: 0.3
  },
  {
    no: '04',
    title: 'Travel Assistant',
    summary: 'An application to manage travel tours, with a social network and e-commerce.',
    role: 'Performed front-end development, troubleshot and handled technical blocker issues.',
    tags: tags('*angular', '*spring boot', '*java', 'tailwindCSS', 'postgreSQL', 'kafka', 'redis'),
    tape: 'bg-[rgb(47_111_214_/_0.75)] tilt-[2deg]',
    tilt: 'tilt-[0.8deg]',
    delay: 0.4
  },
  {
    no: '05',
    title: 'Dynamic Workflow',
    summary:
      'A system to manage company business activities: dynamic workflow using BPMN, form management, task management.',
    role: 'Defined the technical stack, optimised development processes, proposed design patterns and implementation guidelines for the team.',
    tags: tags('*angular', '.net core 6', 'c#', 'postgreSQL', 'mongoDB', 'kafka', 'keycloak'),
    tape: 'bg-[rgb(31_122_92_/_0.75)] tilt-[-2deg]',
    tilt: 'tilt-[-0.6deg]',
    delay: 0.5
  },
  {
    no: '06',
    title: 'Building Access',
    summary: 'A building access control system that ensures only authorized people can enter.',
    role: 'Developed both back end (Node.js) and front end (Angular), troubleshot and handled technical blocker issues.',
    tags: tags('*angular', 'nodejs', 'expressjs', 'aws lambda', 'dynamoDB', 'mqtt'),
    tape: 'bg-[rgb(179_38_30_/_0.75)] tilt-[3deg]',
    tilt: 'tilt-[1.2deg]',
    delay: 0.6
  }
];

const EARLIER: readonly ProjectItem[] = [
  {
    no: '07',
    title: 'Web Automation',
    summary: 'Automation testing for a video conferencing and communication platform.',
    tags: tags('cypress', 'nodejs', 'typescript', 'selenium'),
    tilt: 'tilt-[-1.2deg]',
    delay: 0.7
  },
  {
    no: '08',
    title: 'Telecom Automation 2',
    summary: 'Automation tests for a telecom project.',
    tags: tags('python', 'robot framework', 'selenium', 'appium'),
    tilt: 'tilt-[0.9deg]',
    delay: 0.8
  },
  {
    no: '09',
    title: 'Telecom Automation 1',
    summary: 'Automation tests for a telecom project.',
    tags: tags('junit', 'java', 'selenium'),
    tilt: 'tilt-[-0.7deg]',
    delay: 0.9
  }
];

@Component({
  selector: 'app-projects',
  imports: [Project],
  templateUrl: './projects.html'
})
export class Projects {
  protected readonly featured = FEATURED;
  protected readonly earlier = EARLIER;
}
