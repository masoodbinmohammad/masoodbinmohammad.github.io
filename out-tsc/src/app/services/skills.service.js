import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { SKILLS_DATA } from '../utilities/data/skills.data';
let SkillsService = class SkillsService {
    constructor() { }
    getSkills() {
        return SKILLS_DATA;
    }
};
SkillsService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], SkillsService);
export { SkillsService };
//# sourceMappingURL=skills.service.js.map