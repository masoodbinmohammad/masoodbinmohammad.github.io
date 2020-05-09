import { environment } from '../../environments/environment';

import { IProject } from './IProject';
import { testUniqueness } from './common';

import { PdaData } from './data/pda.data';
import { NewsPageData } from './data/newspage.data';
import { WebOpsData } from './data/web-ops.data';
import { PPSData } from './data/pps.data';
import {PortfolioData} from './data/portfolio.data';
import {CareerbuilderData} from './data/careerbuilder.data';
import {HobbyArchadeData} from './data/hobby-archade.data';
import {BlogData} from './data/blog.data';



const getAllProject = () => {
  const projects = [
    PortfolioData,
    BlogData,
    HobbyArchadeData,
    CareerbuilderData,
    WebOpsData,
    PPSData,
    NewsPageData,
    PdaData
  ];

  if (!environment.production) {
    const result = testUniqueness(projects, project => project.id);

    if (result.error) {
      const errorLog = [];
      result.duplicates.forEach((project: IProject) => {
        errorLog.push(`Duplicate E-id ${project.id} of ${project.name} `);
      });
      throw new Error(JSON.stringify(errorLog));
    }
  }

  return projects;
};

export const ALL_PROJECT_DATA = getAllProject();
