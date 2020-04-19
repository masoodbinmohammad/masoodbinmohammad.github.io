import { Injectable } from '@angular/core';
import { ISkill } from '../utilities/ISkill';
import { SKILLS_DATA } from '../utilities/data/skills.data';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

  getSkills(): ISkill[] {
    return SKILLS_DATA;
  }
}
