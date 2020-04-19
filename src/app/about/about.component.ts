import { Component, OnInit } from '@angular/core';
import { ISkill } from './../utilities/ISkill';
import { SkillsService } from './../services/skills.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  skills: ISkill[];
  constructor(
    private skillsService: SkillsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.skills = this.skillsService.getSkills();
  }

  onBackClick() {
    this.router.navigateByUrl('/');
  }

}
