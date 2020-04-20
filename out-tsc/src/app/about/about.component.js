import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AboutComponent = class AboutComponent {
    constructor(skillsService, router) {
        this.skillsService = skillsService;
        this.router = router;
    }
    ngOnInit() {
        this.skills = this.skillsService.getSkills();
    }
    onBackClick() {
        this.router.navigateByUrl('/');
    }
};
AboutComponent = __decorate([
    Component({
        selector: 'app-about',
        templateUrl: './about.component.html',
        styleUrls: ['./about.component.scss']
    })
], AboutComponent);
export { AboutComponent };
//# sourceMappingURL=about.component.js.map