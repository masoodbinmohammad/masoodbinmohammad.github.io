import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let ProjectCardComponent = class ProjectCardComponent {
    constructor() {
        this.select = new EventEmitter();
    }
    ngOnInit() { }
    onCardClick(project) {
        this.select.emit({ project });
    }
};
__decorate([
    Input('project')
], ProjectCardComponent.prototype, "project", void 0);
__decorate([
    Output('select')
], ProjectCardComponent.prototype, "select", void 0);
ProjectCardComponent = __decorate([
    Component({
        selector: 'app-project-card',
        templateUrl: './project-card.component.html',
        styleUrls: ['./project-card.component.scss']
    })
], ProjectCardComponent);
export { ProjectCardComponent };
//# sourceMappingURL=project-card.component.js.map