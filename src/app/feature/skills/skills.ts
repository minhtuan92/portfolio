import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechCardItem } from '@core/models';
import { Layout } from '@core/services';
import { SkillName, SkillType } from '@core/constants';
import { TechCard } from '@ui/components';

interface Skill {
  skillName: string;
  skillItems: TechCardItem[];
}

@Component({
  selector: 'app-skills',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TechCard],
  template: `
    @let isMobile = layoutService.isMobile();
    <div class="flex flex-col items-start gap-8 lg:pb-8">
      <div class="flex w-full animate-[fadeinleft_0.5s_ease-in] flex-col items-start gap-7">
        <span class="above-typing-header_text">// Programming languages I have learned</span>
        <div class="typing-header">
          <p>{{ '{“' }}&nbsp;</p>
          <p class="typing-header__text type-skills"></p>
          <p>&nbsp;{{ '“}' }}</p>
        </div>
      </div>
      <div class="flex w-full flex-col items-start gap-11 lg:gap-20">
        @for (skill of skills; track $index) {
          <div class="frontend-items item-start flex w-full flex-col gap-8">
            <span class="text-lavender-mauve">// {{ skill.skillName }}</span>
            <div
              [ngClass]="isMobile ? 'flex-col' : 'flex-wrap'"
              class="lg:gap-15 flex content-start items-start gap-3.5"
            >
              @for (skillItem of skill.skillItems; track skillItem.id) {
                <app-tech-card
                  [ngClass]="isMobile ? 'w-full' : ''"
                  [item]="skillItem"
                  [styleClass]="'animate-[zoomin_0.5s_ease-in] ' + (isMobile ? 'w-full' : 'h-72 w-72')"
                ></app-tech-card>
              }
            </div>
          </div>
        }
      </div>
    </div>
  `
})
export class Skills {
  protected readonly layoutService = inject(Layout);
  protected readonly mainFEStack = {
    skillName: 'main front-end technology stack 🏆',
    skillItems: [
      {
        id: 1,
        label: SkillName.ANGULAR,
        image: 'assets/images/svg/angular.svg',
        type: SkillType.FRAMEWORK
      },
      {
        id: 2,
        label: SkillName.RXJS,
        image: 'assets/images/svg/rxjs.svg',
        type: SkillType.LIBRARY
      },
      {
        id: 3,
        label: SkillName.TYPESCRIPT,
        image: 'assets/images/svg/TypeScript.svg',
        type: SkillType.LANGUAGE
      },
      {
        id: 4,
        label: SkillName.CSS,
        image: 'assets/images/svg/css.svg',
        type: SkillType.CSS
      },
      {
        id: 5,
        label: SkillName.TAILWINDCSS,
        image: 'assets/images/svg/TailwindCSS.svg',
        type: SkillType.CSS
      },
      {
        id: 6,
        label: SkillName.POSTCSS,
        image: 'assets/images/svg/postcss.svg',
        type: SkillType.CSS
      },
      {
        id: 7,
        label: SkillName.SASS,
        image: 'assets/images/svg/sass.svg',
        type: SkillType.CSS
      },
      {
        id: 8,
        label: SkillName.BOOTSTRAP,
        image: 'assets/images/svg/bootstrap.svg',
        type: SkillType.CSS
      },
      {
        id: 9,
        label: SkillName.MATERIALUI,
        image: 'assets/images/svg/material-ui.svg',
        type: SkillType.CSS
      }
    ]
  };

  protected readonly additionalBEStack = {
    skillName: 'additional back-end technology stack 🎖',
    skillItems: [
      {
        id: 1,
        label: SkillName.DOTNET_CORE,
        image: 'assets/images/svg/net-core.svg',
        type: SkillType.FRAMEWORK
      },
      {
        id: 2,
        label: SkillName.ENTITY_FRAMEWORK,
        image: 'assets/images/svg/entity-framework.svg',
        type: SkillType.FRAMEWORK
      },
      {
        id: 3,
        label: SkillName.CSHARP,
        image: 'assets/images/svg/csharp.svg',
        type: SkillType.LANGUAGE
      },
      {
        id: 4,
        label: SkillName.EXPRESSJS,
        image: 'assets/images/svg/expressjs.svg',
        type: SkillType.FRAMEWORK
      },
      {
        id: 5,
        label: SkillName.JAVASCRIPT,
        image: 'assets/images/svg/js.svg',
        type: SkillType.LANGUAGE
      },
      {
        id: 6,
        label: SkillName.SPRINGBOOT,
        image: 'assets/images/svg/springboot.svg',
        type: SkillType.FRAMEWORK
      },
      {
        id: 7,
        label: SkillName.JAVA,
        image: 'assets/images/svg/java.svg',
        type: SkillType.LANGUAGE
      },
      {
        id: 8,
        label: SkillName.MYSQL,
        image: 'assets/images/svg/mysql.svg',
        type: SkillType.DATABASE
      },
      {
        id: 9,
        label: SkillName.POSTGRESQL,
        image: 'assets/images/svg/postgresql.svg',
        type: SkillType.DATABASE
      },
      {
        id: 10,
        label: SkillName.MONGODB,
        image: 'assets/images/svg/mongodb.svg',
        type: SkillType.DATABASE
      },
      {
        id: 11,
        label: SkillName.KAFKA,
        image: 'assets/images/svg/kafka.svg',
        type: SkillType.TOOLS
      },
      {
        id: 12,
        label: SkillName.REDIS,
        image: 'assets/images/svg/redis.svg',
        type: SkillType.TOOLS
      },
      {
        id: 13,
        label: SkillName.DOCKER,
        image: 'assets/images/svg/docker.svg',
        type: SkillType.TOOLS
      }
    ]
  };

  protected readonly frontend = {
    skillName: 'front-end 🌍',
    skillItems: [
      {
        id: 1,
        label: SkillName.ANGULAR,
        image: 'assets/images/svg/angular.svg',
        type: SkillType.FRAMEWORK
      },
      {
        id: 2,
        label: SkillName.RXJS,
        image: 'assets/images/svg/rxjs.svg',
        type: SkillType.LIBRARY
      },
      {
        id: 3,
        label: SkillName.TYPESCRIPT,
        image: 'assets/images/svg/TypeScript.svg',
        type: SkillType.LANGUAGE
      },
      {
        id: 4,
        label: SkillName.CSS,
        image: 'assets/images/svg/css.svg',
        type: SkillType.CSS
      },
      {
        id: 5,
        label: SkillName.TAILWINDCSS,
        image: 'assets/images/svg/TailwindCSS.svg',
        type: SkillType.CSS
      },
      {
        id: 6,
        label: SkillName.POSTCSS,
        image: 'assets/images/svg/postcss.svg',
        type: SkillType.CSS
      },
      {
        id: 7,
        label: SkillName.SASS,
        image: 'assets/images/svg/sass.svg',
        type: SkillType.CSS
      },
      {
        id: 8,
        label: SkillName.BOOTSTRAP,
        image: 'assets/images/svg/bootstrap.svg',
        type: SkillType.CSS
      },
      {
        id: 9,
        label: SkillName.MATERIALUI,
        image: 'assets/images/svg/material-ui.svg',
        type: SkillType.CSS
      },
      {
        id: 10,
        label: SkillName.REACTJS,
        image: 'assets/images/svg/reactjs.svg',
        type: SkillType.FRAMEWORK
      },
      {
        id: 11,
        label: SkillName.JAVASCRIPT,
        image: 'assets/images/svg/js.svg',
        type: SkillType.LANGUAGE
      },
      {
        id: 12,
        label: SkillName.NX,
        image: 'assets/images/svg/nx.svg',
        type: SkillType.LIBRARY
      },
      {
        id: 13,
        label: SkillName.STRAPI,
        image: 'assets/images/svg/strapi.svg',
        type: SkillType.OTHERS
      },
      {
        id: 14,
        label: SkillName.PRETTIER,
        image: 'assets/images/svg/prettier.svg',
        type: SkillType.LIBRARY
      },
      {
        id: 15,
        label: SkillName.ESLINT,
        image: 'assets/images/svg/eslint.svg',
        type: SkillType.LIBRARY
      },
      {
        id: 16,
        label: SkillName.HTML,
        image: 'assets/images/svg/html.svg',
        type: SkillType.LANGUAGE
      },
      {
        id: 17,
        label: SkillName.FIREBASE,
        image: 'assets/images/svg/firebase.svg',
        type: SkillType.LIBRARY
      },
      {
        id: 18,
        label: SkillName.CYPRESS,
        image: 'assets/images/svg/cypress.svg',
        type: SkillType.TESTING
      },
      {
        id: 19,
        label: SkillName.JASMINE,
        image: 'assets/images/svg/jasmine.svg',
        type: SkillType.TESTING
      },
      {
        id: 20,
        label: SkillName.WEBPACK,
        image: 'assets/images/svg/webpack.svg',
        type: SkillType.TOOLS
      }
    ]
  };

  protected readonly backend = {
    skillName: 'back-end 📡',
    skillItems: [
      {
        id: 1,
        label: SkillName.NODEJS,
        image: 'assets/images/svg/nodejs.svg',
        type: SkillType.FRAMEWORK
      },
      {
        id: 2,
        label: SkillName.EXPRESSJS,
        image: 'assets/images/svg/expressjs.svg',
        type: SkillType.FRAMEWORK
      },
      {
        id: 3,
        label: SkillName.TYPESCRIPT,
        image: 'assets/images/svg/TypeScript.svg',
        type: SkillType.LANGUAGE
      },
      {
        id: 4,
        label: SkillName.JAVASCRIPT,
        image: 'assets/images/svg/js.svg',
        type: SkillType.LANGUAGE
      },
      {
        id: 5,
        label: SkillName.DOTNET_CORE,
        image: 'assets/images/svg/net-core.svg',
        type: SkillType.FRAMEWORK
      },
      {
        id: 6,
        label: SkillName.ENTITY_FRAMEWORK,
        image: 'assets/images/svg/entity-framework.svg',
        type: SkillType.FRAMEWORK
      },
      {
        id: 7,
        label: SkillName.CSHARP,
        image: 'assets/images/svg/csharp.svg',
        type: SkillType.LANGUAGE
      },
      {
        id: 8,
        label: SkillName.SPRINGBOOT,
        image: 'assets/images/svg/springboot.svg',
        type: SkillType.FRAMEWORK
      },
      {
        id: 9,
        label: SkillName.JAVA,
        image: 'assets/images/svg/java.svg',
        type: SkillType.LANGUAGE
      },
      {
        id: 9,
        label: SkillName.DOCKER,
        image: 'assets/images/svg/docker.svg',
        type: SkillType.TOOLS
      }
    ]
  };

  protected readonly dataBase = {
    skillName: 'database 📚',
    skillItems: [
      {
        id: 1,
        label: SkillName.POSTGRESQL,
        image: 'assets/images/svg/postgresql.svg',
        type: SkillType.DATABASE
      },
      {
        id: 2,
        label: SkillName.MYSQL,
        image: 'assets/images/svg/mysql.svg',
        type: SkillType.DATABASE
      },
      {
        id: 3,
        label: SkillName.POSTGRESQL,
        image: 'assets/images/svg/postgresql.svg',
        type: SkillType.DATABASE
      },
      {
        id: 4,
        label: SkillName.MONGODB,
        image: 'assets/images/svg/mongodb.svg',
        type: SkillType.DATABASE
      }
    ]
  };

  protected readonly versionControl = {
    skillName: 'version control ✨',
    skillItems: [
      {
        id: 1,
        label: SkillName.GIT,
        image: 'assets/images/svg/git.svg',
        type: SkillType.VERSION_CONTROL
      },
      {
        id: 2,
        label: SkillName.GITHUB,
        image: 'assets/images/svg/github-tech.svg',
        type: SkillType.VERSION_CONTROL
      },
      {
        id: 3,
        label: SkillName.GITLAB,
        image: 'assets/images/svg/gitlab.svg',
        type: SkillType.VERSION_CONTROL
      },
      {
        id: 4,
        label: SkillName.BITBUCKET,
        image: 'assets/images/svg/bitbucket.svg',
        type: SkillType.VERSION_CONTROL
      }
    ]
  };

  protected readonly packageControl = {
    skillName: 'package control 🛒',
    skillItems: [
      {
        id: 1,
        label: SkillName.NPM,
        image: 'assets/images/svg/npm.svg',
        type: SkillType.PACKAGE_CONTROL
      },
      {
        id: 2,
        label: SkillName.YARN,
        image: 'assets/images/svg/yarn.svg',
        type: SkillType.PACKAGE_CONTROL
      },
      {
        id: 3,
        label: SkillName.PNPM,
        image: 'assets/images/svg/pnpm.svg',
        type: SkillType.PACKAGE_CONTROL
      },
      {
        id: 4,
        label: SkillName.PYPI,
        image: 'assets/images/svg/pypi.svg',
        type: SkillType.PACKAGE_CONTROL
      }
    ]
  };

  protected readonly server = {
    skillName: 'server 🖥',
    skillItems: [
      {
        id: 1,
        label: SkillName.APACHE,
        image: 'assets/images/svg/apache.svg',
        type: SkillType.SERVER
      },
      {
        id: 2,
        label: SkillName.NGINX,
        image: 'assets/images/svg/nginx.svg',
        type: SkillType.SERVER
      },
      {
        id: 3,
        label: SkillName.TOMCAT,
        image: 'assets/images/svg/tomcat.svg',
        type: SkillType.SERVER
      }
    ]
  };

  protected readonly os = {
    skillName: 'os 📺',
    skillItems: [
      {
        id: 1,
        label: SkillName.WINDOWS,
        image: 'assets/images/svg/windows.svg',
        type: SkillType.OS
      },
      {
        id: 2,
        label: SkillName.LINUX,
        image: 'assets/images/svg/linux.svg',
        type: SkillType.OS
      }
    ]
  };

  protected readonly tools = {
    skillName: 'tools 🔨',
    skillItems: [
      {
        id: 1,
        label: SkillName.VS,
        image: 'assets/images/svg/vs.svg',
        type: SkillType.TOOLS
      },
      {
        id: 2,
        label: SkillName.VSCODE,
        image: 'assets/images/svg/vscode.svg',
        type: SkillType.TOOLS
      },
      {
        id: 3,
        label: SkillName.ECLIPSE,
        image: 'assets/images/svg/eclipse.svg',
        type: SkillType.TOOLS
      },
      {
        id: 4,
        label: SkillName.FIGMA,
        image: 'assets/images/svg/figma.svg',
        type: SkillType.TOOLS
      },
      {
        id: 5,
        label: SkillName.K8S,
        image: 'assets/images/svg/k8s.svg',
        type: SkillType.TOOLS
      },
      {
        id: 6,
        label: SkillName.KAFKA,
        image: 'assets/images/svg/kafka.svg',
        type: SkillType.TOOLS
      },
      {
        id: 7,
        label: SkillName.REDIS,
        image: 'assets/images/svg/redis.svg',
        type: SkillType.TOOLS
      },
      {
        id: 8,
        label: SkillName.DOCKER,
        image: 'assets/images/svg/docker.svg',
        type: SkillType.TOOLS
      }
    ]
  };

  protected readonly others = {
    skillName: 'others 🎲',
    skillItems: [
      {
        id: 1,
        label: SkillName.GITHUB_ACTION,
        image: 'assets/images/svg/github-action.svg',
        type: SkillType.OTHERS
      },
      {
        id: 2,
        label: SkillName.PYTHON,
        image: 'assets/images/svg/python.svg',
        type: SkillType.LANGUAGE
      },
      {
        id: 3,
        label: SkillName.PERL,
        image: 'assets/images/svg/perl.svg',
        type: SkillType.LANGUAGE
      },
      {
        id: 4,
        label: SkillName.YAML,
        image: 'assets/images/svg/yaml.svg',
        type: SkillType.LANGUAGE
      },
      {
        id: 5,
        label: SkillName.WEBPACK,
        image: 'assets/images/svg/webpack.svg',
        type: SkillType.TOOLS
      },
      {
        id: 6,
        label: SkillName.STRAPI,
        image: 'assets/images/svg/strapi.svg',
        type: SkillType.OTHERS
      }
    ]
  };

  protected readonly skills = [
    { ...this.mainFEStack },
    { ...this.additionalBEStack },
    { ...this.frontend },
    { ...this.backend },
    { ...this.versionControl },
    { ...this.packageControl },
    { ...this.server },
    { ...this.os },
    { ...this.tools },
    { ...this.others }
  ];
}
