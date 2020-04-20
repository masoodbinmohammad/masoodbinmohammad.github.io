import { __decorate } from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
let TypingComponent = class TypingComponent {
    constructor() {
        this.text = '';
        this.time = 1000;
        this.delay = 500;
        this.displayText = '';
        this.isProcessRunning = false;
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        if (this.text)
            this.startRendering();
    }
    startRendering() {
        this.displayText = '';
        if (!this.isProcessRunning) {
            setTimeout(() => {
                const eachTime = Math.round(this.time / this.text.length);
                const textArr = this.text.split('');
                this.renderTextByLetter(textArr, eachTime);
            }, this.delay);
        }
        this.isProcessRunning = true;
    }
    renderTextByLetter(textArr, timeInterval, letter = textArr[0]) {
        if (!textArr || textArr.length <= 0) {
            const cursor = this.cursorRef.nativeElement;
            cursor.classList.add('cursor__animate');
            this.isProcessRunning = false;
            return;
        }
        setTimeout(() => {
            this.displayText += letter;
            const newTextArr = textArr.slice(1);
            this.renderTextByLetter(newTextArr, timeInterval, newTextArr[0]);
        }, timeInterval);
    }
};
__decorate([
    Input('text')
], TypingComponent.prototype, "text", void 0);
__decorate([
    Input('time')
], TypingComponent.prototype, "time", void 0);
__decorate([
    Input('delay')
], TypingComponent.prototype, "delay", void 0);
__decorate([
    ViewChild('cursor')
], TypingComponent.prototype, "cursorRef", void 0);
TypingComponent = __decorate([
    Component({
        selector: 'app-typing',
        templateUrl: './typing.component.html',
        styleUrls: ['./typing.component.scss']
    })
], TypingComponent);
export { TypingComponent };
//# sourceMappingURL=typing.component.js.map