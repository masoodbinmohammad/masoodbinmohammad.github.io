import { Component, OnInit } from '@angular/core';
import { ITag } from './../utilities/ITags';
import { TagsService } from './../services/tags.service';

@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.scss']
})
export class FilterButtonComponent implements OnInit {

  keySkills: ITag[];

  constructor(private tagsService: TagsService) {
    this.keySkills = tagsService.tags;
  }

  ngOnInit() {}

  toogleSkillSelection(tag: ITag) {
    this.tagsService.toogleTagSelection(tag.displayName);
  }

  disableIfOneBtn(keySkill: ITag) {
    const targetKeySkills = this.keySkills.filter(e => e.isSelected);
    return (
      targetKeySkills.length === 1 &&
      targetKeySkills[0].displayName === keySkill.displayName
    );
  }

}
