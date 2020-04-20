import { __decorate } from "tslib";
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { keyframes, style, animate, transition, trigger } from '@angular/animations';
let ProjectDetailsComponent = class ProjectDetailsComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.cancellation = new EventEmitter();
    }
    ngOnInit() {
        this.renderer.addClass(document.body, 'isSideDrawerOpen');
    }
    onCancellation(e, force = false) {
        const cancelAttribute = force || e.target.attributes.getNamedItem('enable-cancellation');
        if (force || (cancelAttribute && cancelAttribute.value))
            this.cancellation.emit();
        this.renderer.removeClass(document.body, 'isSideDrawerOpen');
    }
};
__decorate([
    Input('project')
], ProjectDetailsComponent.prototype, "project", void 0);
__decorate([
    Output('cancellation')
], ProjectDetailsComponent.prototype, "cancellation", void 0);
ProjectDetailsComponent = __decorate([
    Component({
        selector: 'app-project-details',
        templateUrl: './project-details.component.html',
        styleUrls: ['./project-details.component.scss'],
        animations: [
            trigger('slideIn', [
                transition(':leave', [
                    style({
                        transform: 'translateX(0%)'
                    }),
                    animate('0.3s ease-out', keyframes([
                        style({
                            transform: 'translateX(0%)',
                            offset: 0
                        }),
                        style({
                            transform: 'translateX(100%)',
                            offset: 1
                        })
                    ]))
                ]),
                transition(':enter', [
                    style({
                        transform: 'translateX(100%)'
                    }),
                    animate('0.3s ease-out', keyframes([
                        style({
                            transform: 'translateX(100%)',
                            offset: 0
                        }),
                        style({
                            transform: 'translateX(0%)',
                            offset: 1
                        })
                    ]))
                ])
            ])
        ]
    })
], ProjectDetailsComponent);
export { ProjectDetailsComponent };
//# sourceMappingURL=project-details.component.js.map