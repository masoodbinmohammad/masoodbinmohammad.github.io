import { __decorate } from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
let ProfileCardComponent = class ProfileCardComponent {
    constructor(router) {
        this.router = router;
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
        this.router.navigateByUrl('/');
    }
};
__decorate([
    Output()
], ProfileCardComponent.prototype, "ExploreMe", void 0);
ProfileCardComponent = __decorate([
    Component({
        selector: 'app-profile-card',
        templateUrl: './profile-card.component.html',
        styleUrls: ['./profile-card.component.scss']
    })
], ProfileCardComponent);
export { ProfileCardComponent };
//# sourceMappingURL=profile-card.component.js.map