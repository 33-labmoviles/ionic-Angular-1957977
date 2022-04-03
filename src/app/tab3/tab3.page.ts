import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataSnapshot } from 'firebase/database';
import { DbservService } from '../dbserv.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private http: HttpClient, private db: DbservService) {}


  onSubmit(form: NgForm) {
    var newpersona = 
      {
        "apellidos": this.newapellidos,
        "image": "assets/images/pic.png",
        "matricula": this.newmatricula,
        "nombre": this.newnombre
      };
    this.db.postpersona(newpersona).subscribe();
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
