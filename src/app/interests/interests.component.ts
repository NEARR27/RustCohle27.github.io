import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {


  interests: Array<any> = [];
  constructor() { }

  ngOnInit(): void {

    let interest1 = {
      inter: "Video games",
    };

    let interest2 = {
      inter: "Pilantrophy",
    };

    let interest3 = {
      inter: "Reading",
    };

    let interest4 = {
      inter: "IA",
    };

    let interest5 = {
      inter: "Art",
    };

    this.interests.push(interest1);
    this.interests.push(interest2);
    this.interests.push(interest3);
    this.interests.push(interest4);
    this.interests.push(interest5);
  }

}
