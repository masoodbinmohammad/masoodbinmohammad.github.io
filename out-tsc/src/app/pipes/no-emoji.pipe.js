import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let NoEmojiPipe = class NoEmojiPipe {
    transform(value) {
        return value.replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g, '');
    }
};
NoEmojiPipe = __decorate([
    Pipe({
        name: 'noEmoji'
    })
], NoEmojiPipe);
export { NoEmojiPipe };
//# sourceMappingURL=no-emoji.pipe.js.map