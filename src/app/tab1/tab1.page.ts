import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {this.sort();}

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
      @Input() newnombre: string ="";
      @Input() newapellidos: string ="";
      @Input() newmatricula: string ="";

      addperson(): void{
        var newpersona = 
          {
            "nombre": this.newnombre,
            "apellidos": this.newapellidos,
            "matricula": this.newmatricula,
            "image": "assets/images/pic.png"
          };
        this.personas.push(newpersona);
        this.sort();
        this.clear();
      }

      sort(): void{
        this.personas.sort(function(a,b){
          var aname= a.nombre.toUpperCase();
          var bname= b.nombre.toUpperCase();
          if(aname>bname){
            return 1;
          }
          if(bname>aname){
            return -1;
          }
        });
      }


      clear(): void{
        this.newnombre="";
        this.newapellidos="";
        this.newmatricula="";
        this.personas.sort();
      }
    




}
