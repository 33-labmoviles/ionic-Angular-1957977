import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { DbservService } from '../dbserv.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private http: HttpClient, private db: DbservService) {}


  ngOnInit(): void {
    this.db.getpersonas().subscribe(arr => { this.personas=arr;});

  }

  eliminar(i: any): any{
    let index = this.personas.findIndex( x => x.matricula == i.matricula);
    this.db.deletepersona(index).subscribe( arr => {console.log(index);window.history.back();window.location.reload();})
  }

  edit(){
    this.editando = !this.editando;
  };

  save(): any{
    this.index = this.personas.findIndex( x => x.matricula == this.newmatricula);
    this.newpersona={
      "apellidos": this.newapellidos,
      "image": "assets/images/pic.png",
      "matricula": this.personas[this.index].matricula,
      "nombre": this.newnombre
    };
    this.db.putpersona(this.index,this.newpersona).subscribe(arr=> {window.location.reload();});
    console.log(this.newpersona);
    this.editando=false;
    this.clear();
  }

  index: string = '';
  editando: boolean = false;
  newpersona: any = {};
  personas: any = [];

  @Input() newnombre: string ="";
  @Input() newapellidos: string ="";
  @Input() newmatricula: string ="";

  clear(): void{
    this.newnombre="";
    this.newapellidos="";
    this.newmatricula="";  }
}
