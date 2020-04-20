import { environment } from '../../environments/environment';
import { testUniqueness } from './common';
const getAllProject = () => {
    const projects = [];
    if (!environment.production) {
        const result = testUniqueness(projects, project => project.id);
        if (result.error) {
            const errorLog = [];
            result.duplicates.forEach((project) => {
                errorLog.push(`Duplicate E-id ${project.id} of ${project.name} `);
            });
            throw new Error(JSON.stringify(errorLog));
        }
    }
    return projects;
};
export const ALL_PROJECT_DATA = getAllProject();
//# sourceMappingURL=project-data.js.map