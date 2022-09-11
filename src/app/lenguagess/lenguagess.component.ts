import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lenguagess',
  templateUrl: './lenguagess.component.html',
  styleUrls: ['./lenguagess.component.css']
})
export class LenguagessComponent implements OnInit {

  
  languages: Array<any> = [];
  constructor() { }

  ngOnInit(): void {

    let language1 = {
      language : "Español",

    };

    let language2 = {
      language : "Ingles",
    };

    this.languages.push(language1);
    this.languages.push(language2);
  }

}
