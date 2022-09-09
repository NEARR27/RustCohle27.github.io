import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Array<any> = [];

  constructor() { }

  ngOnInit(): void {

    let skill1 = {
      skill : "Thinking Through first principies",
    };

    let skill2 = {
      skill : "Micromanaging",
    };

    let skill3 = {
      skill : "Goal Oriented ",
    };

    let skill4 = {
      skill : "Future focused",
    };

    let skill5 = {
      skill : "Critical Thinking",
    };

    let skill6 = {
      skill : "Resiliency",
    };

    let skill7 = {
      skill : "Verbal and Written Communication",
    };

    let skill8 = {
      skill : "Leadership",
    };

    let skill9 = {
      skill : "Creativity",
    };

    let skill10 = {
      skill : "Time Management",
    };

    this.skills.push(skill1);
    this.skills.push(skill2);
    this.skills.push(skill3);
    this.skills.push(skill4);
    this.skills.push(skill5);
    this.skills.push(skill6);
    this.skills.push(skill7);
    this.skills.push(skill8);
    this.skills.push(skill9);
    this.skills.push(skill10);
  }

}
