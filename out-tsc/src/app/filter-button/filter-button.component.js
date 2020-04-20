import { __decorate } from "tslib";
import { Component } from '@angular/core';
let FilterButtonComponent = class FilterButtonComponent {
    constructor(tagsService) {
        this.tagsService = tagsService;
        this.keySkills = tagsService.tags;
    }
    ngOnInit() { }
    toogleSkillSelection(tag) {
        this.tagsService.toogleTagSelection(tag.displayName);
    }
    disableIfOneBtn(keySkill) {
        const targetKeySkills = this.keySkills.filter(e => e.isSelected);
        return (targetKeySkills.length === 1 &&
            targetKeySkills[0].displayName === keySkill.displayName);
    }
};
FilterButtonComponent = __decorate([
    Component({
        selector: 'app-filter-button',
        templateUrl: './filter-button.component.html',
        styleUrls: ['./filter-button.component.scss']
    })
], FilterButtonComponent);
export { FilterButtonComponent };
//# sourceMappingURL=filter-button.component.js.map