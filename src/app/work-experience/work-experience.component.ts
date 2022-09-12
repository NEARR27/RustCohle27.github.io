import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  workExperience: Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    let work1 = {
          fecha: "2018-2019",
          ubicacion: "México",
          puesto: "Java Developer",
          empresa: "Java",
          logros : [
            { descripcion: "Dron autonomo" },
            { descripcion: "Cluster GPU " },
            ]
    };
    let work2 = {
      fecha: "2019-2020",
      ubicacion: "México",
      puesto: "Data Analyst",
      empresa: "Dell",
      logros : [
        { descripcion: "Data Analyst" },
        { descripcion: "Data " },
        ]
    };

    let work3 = {
      fecha: "2020-2021",
      ubicacion: "México",
      puesto: "Data Engineer",
      empresa: "Apple",
      logros : [
        { descripcion: "Data Engineer" },
        { descripcion: "Data Engineer" },
        ]

    };

    this.workExperience.push(work1);
    this.workExperience.push(work2);
    this.workExperience.push(work3);

  }

}
