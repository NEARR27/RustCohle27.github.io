import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acheviements',
  templateUrl: './acheviements.component.html',
  styleUrls: ['./acheviements.component.css']
})
export class AcheviementsComponent implements OnInit {

  achievements: Array<any> = []; 

  constructor() { }

  ngOnInit(): void {

    let achievent1 = {
      titulo: "Certificado master en Angular",
      ano: "2022",
      descripcion: "Otorgado por Google",

    };

    let achievent2 = {
      titulo: "Certificado Master en Data Analyst",
      ano: "2020",
      descripcion: "Otorgado por",

    };

    let achievent3 = {
      titulo: "Certificado Data Engineer",
      ano: "2021",
      descripcion: "Otorgado por",

    };

    let achievent4 = {
      titulo: "Certificado Master en JAVA",
      ano: "2019",
      descripcion: "Otrogado por Oracle",

    };

    let achievent5 = {
      titulo: "Certificado Python",
      ano: "2023",
      descripcion: "https://www.kaggle.com/learn/certification/cristianteran/python",

    };

    let achievent5 = {
      titulo: "Certificado Python Pandas",
      ano: "2023",
      descripcion: "https://www.kaggle.com/learn/certification/cristianteran/pandas",

    };

    this.achievements.push(achievent1);
    this.achievements.push(achievent2);
    this.achievements.push(achievent3);
    this.achievements.push(achievent4);
    this.achievements.push(achievent5);
    this.achievements.push(achievent6);

  }

}
