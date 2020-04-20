import { __decorate } from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
import { trigger, transition, style, query, animate, stagger, keyframes } from '@angular/animations';
let NavigatorComponent = class NavigatorComponent {
    constructor(router) {
        this.router = router;
        this.navLinks = [
            { displayName: 'Portfolio', url: '/portfolio' },
            { displayName: 'About & Skills', url: '/about' },
            { displayName: 'Contacts & Profiles', url: '/profiles' },
            { displayName: 'Profile Card', url: '/profile-card' }
        ];
        this.cancellation = new EventEmitter();
    }
    ngOnInit() {
    }
    onBgClick() {
        this.cancellation.emit();
    }
    onNavItemClick(e, url) {
        e.stopPropagation();
        this.router.navigateByUrl(url);
    }
};
__decorate([
    Output('cancellation')
], NavigatorComponent.prototype, "cancellation", void 0);
NavigatorComponent = __decorate([
    Component({
        selector: 'app-navigator',
        templateUrl: './navigator.component.html',
        styleUrls: ['./navigator.component.scss'],
        animations: [
            trigger('slideIn', [
                transition('* => *', [
                    query(':enter', style({ marginLeft: '50%', opacity: 0 }), {
                        optional: true
                    }),
                    query(':leave', style({ marginLeft: '0%', opacity: 1 }), {
                        optional: true
                    }),
                    query(':enter', [
                        stagger('0.2s', [
                            animate('0.5s ease-out', keyframes([
                                style({ offset: 0 }),
                                style({ marginLeft: '0%', opacity: 0.8, offset: 0.8 }),
                                style({ marginLeft: '-10%', opacity: 1, offset: 0.9 }),
                                style({ marginLeft: '0%', opacity: 1, offset: 1 })
                            ]))
                        ])
                    ], { optional: true }),
                    query(':leave', [
                        stagger('0.2s', [
                            animate('0.5s ease-in', keyframes([
                                style({ offset: 0 }),
                                style({ marginLeft: '10%', offset: 0.1 }),
                                style({ marginLeft: '0%', offset: 0.4 }),
                                style({ marginLeft: '-50%', opacity: 0, offset: 1 })
                            ]))
                        ])
                    ], { optional: true })
                ])
            ])
        ]
    })
], NavigatorComponent);
export { NavigatorComponent };
//# sourceMappingURL=navigator.component.js.map