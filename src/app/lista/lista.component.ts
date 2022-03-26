import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {

  constructor() { }

  ngOnInit() {}



  personas = [
    {
      "nombre": "Diosito",
      "apellidos": "????",
      "matricula": "11111111",
      "image": "assets/images/pic.png"
    },
    {
      "nombre": "Yo",
      "apellidos": "Guel",
      "matricula": "1957977",
      "image": "assets/images/pic.png"
    },
    {
      "nombre": "La profe",
      "apellidos": "the best (paseme profe)",
      "matricula": "17G35434",
      "image": "assets/images/pic.png"
    },
    {
      "nombre": "Diosito",
      "apellidos": "????",
      "matricula": "11112111",
      "image": "assets/images/pic.png"
    },
    {
      "nombre": "Yo",
      "apellidos": "Guel",
      "matricula": "1957377",
      "image": "assets/images/pic.png"
    },
    {
      "nombre": "La profe",
      "apellidos": "the best (paseme profe)",
      "matricula": "17G35434",
      "image": "assets/images/pic.png"
    },
    {
      "nombre": "Diosito",
      "apellidos": "????",
      "matricula": "111111",
      "image": "assets/images/pic.png"
    },
    {
      "nombre": "Yo",
      "apellidos": "Guel",
      "matricula": "197977",
      "image": "assets/images/pic.png"
    },
    {
      "nombre": "La profe",
      "apellidos": "the best (paseme profe)",
      "matricula": "175434",
      "image": "assets/images/pic.png"
    }
  ];
}
