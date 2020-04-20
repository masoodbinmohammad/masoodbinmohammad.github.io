import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { trigger, transition, query, animateChild } from '@angular/animations';
let ProfileComponent = class ProfileComponent {
    constructor() {
        this.showNavigationMenu = false;
    }
    ngOnInit() {
    }
};
ProfileComponent = __decorate([
    Component({
        selector: 'app-profile',
        templateUrl: './profile.component.html',
        styleUrls: ['./profile.component.scss'],
        animations: [
            trigger('animate', [
                transition('* => *', [
                    query(':leave, :enter', [animateChild()], {
                        optional: true
                    })
                ])
            ])
        ]
    })
], ProfileComponent);
export { ProfileComponent };
//# sourceMappingURL=profile.component.js.map