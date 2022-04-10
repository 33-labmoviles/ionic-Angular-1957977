import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Database, set, ref, update, getDatabase } from 'firebase/database';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  onSubmit(form: NgForm) {
  const db = getDatabase();
  set(ref(db, 'personas/'+ this.newmatricula),{
    apellidos: this.newapellidos,
    image: "assets/images/pic.png",
    matricula: this.newmatricula,
    nombre: this.newnombre
  });
  window.location.reload();
  this.clear();
  }


  newpersona: any = {};
  personas: any = [];

  @Input() newnombre: string ="";
  @Input() newapellidos: string ="";
  @Input() newmatricula: string ="";

  clear(): void{
    this.newnombre="";
    this.newapellidos="";
    this.newmatricula="";
    this.personas.sort();
  }

  

}
