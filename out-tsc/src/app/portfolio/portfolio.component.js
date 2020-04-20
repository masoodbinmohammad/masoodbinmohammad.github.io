import { __decorate } from "tslib";
import { Component, HostListener, ViewChild } from '@angular/core';
let PortfolioComponent = class PortfolioComponent {
    constructor(router, tagsService) {
        this.router = router;
        this.tagsService = tagsService;
        this.animatedTypingText = '🙋 Hey, sort my projects by clicking the categories. ';
        this.dpLogoStyle = {
            height: '12rem',
            width: '12rem',
            borderWidth: '3px'
        };
        this.setFixedPostion = false;
    }
    ngOnInit() {
        this.updateAnimatedTextOnce();
    }
    updateAnimatedTextOnce() {
        let updateCount = 0;
        this.tagsService.onTagUpdate.subscribe(() => {
            if (updateCount === 0) {
                this.animatedTypingText =
                    'Great! Have a great day! 😊';
                updateCount++;
            }
        });
    }
    onScroll() {
        const portfolioHeader = this.portfolioHeaderRef.nativeElement;
        const portfolioArea = this.portfolioAreaRef.nativeElement;
        const portfolioSelectionArea = this.portfolioSelectionAreaRef
            .nativeElement;
        const thresoldHeight = portfolioHeader.scrollHeight + portfolioHeader.offsetTop;
        const portfolioSelectionHeight = portfolioSelectionArea.scrollHeight + portfolioSelectionArea.offsetTop;
        if (window.scrollY > thresoldHeight) {
            portfolioArea.style.marginTop = `${portfolioSelectionHeight + 5}px`;
            this.setFixedPostion = true;
        }
        else {
            portfolioArea.style.marginTop = `inherit`;
            this.setFixedPostion = false;
            const factor = 1 - window.scrollY / (thresoldHeight + 40);
            // const netFactor = window.innerWidth < 900 ? 1 : 1 - factor;
            this.dpLogoStyle = Object.assign(Object.assign({}, this.dpLogoStyle), { height: `${12 * factor}rem`, width: `${12 * factor}rem` });
            portfolioHeader.style.opacity = factor.toString();
        }
    }
    onBackBtnClick() {
        this.router.navigateByUrl('/');
    }
};
__decorate([
    ViewChild('portfolioHeader')
], PortfolioComponent.prototype, "portfolioHeaderRef", void 0);
__decorate([
    ViewChild('portfolioArea')
], PortfolioComponent.prototype, "portfolioAreaRef", void 0);
__decorate([
    ViewChild('portfolioSelectionArea')
], PortfolioComponent.prototype, "portfolioSelectionAreaRef", void 0);
__decorate([
    HostListener('window:scroll')
], PortfolioComponent.prototype, "onScroll", null);
PortfolioComponent = __decorate([
    Component({
        selector: 'app-portfolio',
        templateUrl: './portfolio.component.html',
        styleUrls: ['./portfolio.component.scss']
    })
], PortfolioComponent);
export { PortfolioComponent };
//# sourceMappingURL=portfolio.component.js.map