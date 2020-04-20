import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let PicLogoComponent = class PicLogoComponent {
    constructor() { }
    ngOnInit() {
        this.logoStyles = {
            height: this.height,
            width: this.width
        };
        this.imgStyle = {
            borderWidth: this.borderWidth
        };
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
};
__decorate([
    Input('height')
], PicLogoComponent.prototype, "height", void 0);
__decorate([
    Input('width')
], PicLogoComponent.prototype, "width", void 0);
__decorate([
    Input('borderWidth')
], PicLogoComponent.prototype, "borderWidth", void 0);
PicLogoComponent = __decorate([
    Component({
        selector: 'app-pic-logo',
        templateUrl: './pic-logo.component.html',
        styleUrls: ['./pic-logo.component.scss']
    })
], PicLogoComponent);
export { PicLogoComponent };
//# sourceMappingURL=pic-logo.component.js.map