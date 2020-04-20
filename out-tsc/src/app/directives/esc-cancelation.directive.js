import { __decorate } from "tslib";
import { Directive, HostListener, Output, EventEmitter } from '@angular/core';
let EscCancelationDirective = class EscCancelationDirective {
    constructor() {
        this.appEscCancelation = new EventEmitter();
    }
    onKeydownHandler(event) {
        if (event.key === 'Escape')
            this.appEscCancelation.emit({
                msg: 'Escape Btn Clicked',
                event
            });
    }
};
__decorate([
    Output('appEscCancelation')
], EscCancelationDirective.prototype, "appEscCancelation", void 0);
__decorate([
    HostListener('document:keydown', ['$event'])
], EscCancelationDirective.prototype, "onKeydownHandler", null);
EscCancelationDirective = __decorate([
    Directive({
        selector: '[appEscCancelation]'
    })
], EscCancelationDirective);
export { EscCancelationDirective };
//# sourceMappingURL=esc-cancelation.directive.js.map