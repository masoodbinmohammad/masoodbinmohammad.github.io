import { __decorate } from "tslib";
import { Injectable, EventEmitter } from '@angular/core';
import { tagData } from '../utilities/data/tags-data';
let TagsService = class TagsService {
    constructor() {
        this.onTagUpdate = new EventEmitter();
        this.tags = tagData;
    }
    toogleTagSelection(tagName) {
        const totalSelection = this.tags.reduce((prev, current) => prev + (current.isSelected ? 1 : 0), 0);
        const selectedSkill = this.tags.find(e => e.displayName === tagName);
        if (totalSelection <= 1 && selectedSkill.isSelected)
            return;
        selectedSkill.isSelected = !selectedSkill.isSelected;
        this.onTagUpdate.emit({
            tags: this.tags.filter(e => e.isSelected)
        });
    }
};
TagsService = __decorate([
    Injectable()
], TagsService);
export { TagsService };
//# sourceMappingURL=tags.service.js.map