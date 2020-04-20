import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { ALL_PROJECT_DATA } from '../utilities/project-data';
let ProjectDataService = class ProjectDataService {
    constructor() { }
    getProjects() {
        return ALL_PROJECT_DATA;
    }
};
ProjectDataService = __decorate([
    Injectable()
], ProjectDataService);
export { ProjectDataService };
//# sourceMappingURL=project-data.service.js.map