import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education: Array<any> = [];

  constructor() { }

  ngOnInit(): void {

    let education1 = {
      fecha: "10/2018 - 09/2022",
      carrera: "Ingenieria de software",
      universidad: "Universidad Veracruzana",
    };

    let education2 = {
      fecha: "10/2020 - 08/2022",
      carrera: "Ingenieria en sistemas computacionales",
      universidad: "Universidad Veracruzana",

    };

    this.education.push(education1);
    this.education.push(education2);
  }

}
