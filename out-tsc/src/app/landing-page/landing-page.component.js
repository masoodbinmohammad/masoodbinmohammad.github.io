import { __decorate } from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
let LandingPageComponent = class LandingPageComponent {
    constructor() {
        this.ExploreMe = new EventEmitter();
        this.startTadaAnimation = false;
    }
    ngOnInit() {
        setInterval(() => {
            this.startTadaAnimation = !this.startTadaAnimation;
        }, 3000);
    }
    onExploreMeClick() {
        this.ExploreMe.emit();
    }
};
__decorate([
    Output('ExploreMe')
], LandingPageComponent.prototype, "ExploreMe", void 0);
LandingPageComponent = __decorate([
    Component({
        selector: 'app-landing-page',
        templateUrl: './landing-page.component.html',
        styleUrls: ['./landing-page.component.scss']
    })
], LandingPageComponent);
export { LandingPageComponent };
//# sourceMappingURL=landing-page.component.js.map