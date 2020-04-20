import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let MaxLengthPipe = class MaxLengthPipe {
    transform(value, maxLength = 10, prettier = false) {
        let transformedValue = value.slice(0, maxLength);
        if (value.length > maxLength) {
            if (prettier)
                transformedValue = this.makePrettier(transformedValue);
            transformedValue += '...';
        }
        return transformedValue;
    }
    makePrettier(value) {
        return value
            .split(' , ')
            .filter((_, index, arr) => arr.length - 1 !== index && arr.length >= 1)
            .join(', ');
    }
};
MaxLengthPipe = __decorate([
    Pipe({
        name: 'maxLength'
    })
], MaxLengthPipe);
export { MaxLengthPipe };
//# sourceMappingURL=max-length.pipe.js.map