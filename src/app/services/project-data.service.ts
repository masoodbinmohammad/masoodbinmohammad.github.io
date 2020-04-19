import { Injectable } from '@angular/core';

import { IProject } from './../utilities/IProject';
import { ALL_PROJECT_DATA } from '../utilities/project-data';

@Injectable()
export class ProjectDataService {

  constructor() {}

  getProjects(): IProject[] {
    return ALL_PROJECT_DATA;
  }
}
