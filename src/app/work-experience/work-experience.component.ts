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
          ubicacion: "Mexico",
          puesto: "Java Developer",
          empresa: "Java",
          logros : [
            { descripcion: "Dron autonomo" },
            { descripcion: "Cluster GPU " },
            ]
    };
    let work2 = {
      fecha: "2019-2020",
      ubicacion: "Mexico",
      puesto: "Data Analyst",
      empresa: "Dell",
      logros : [
        { descripcion: "Data Analyst" },
        { descripcion: "Data " },
        ]
    };

    this.workExperience.push(work1);
    this.workExperience.push(work2);

  }

}
