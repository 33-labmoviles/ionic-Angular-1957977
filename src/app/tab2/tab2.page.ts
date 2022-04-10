import { Component, Input } from '@angular/core';
import { getDatabase, onValue, ref, remove, set, update } from 'firebase/database';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}


  ngOnInit(): void {
    const database = getDatabase();
    const auxpersona = ref(database, 'personas/');
    onValue(auxpersona, (aux) => {
      this.personas = aux.val();
      this.personas = Object.values(this.personas);
    });
  }

  eliminar(i: any): any{
    const database = getDatabase();
    remove(ref(database, 'personas/'+i.matricula));
    window.history.back();window.location.reload();
  }

  edit(i:any){
    this.editando = !this.editando;
    this.indice=i;
  };

  save(): any{
    const db = getDatabase();
    update(ref(db, 'personas/'+ this.indice.matricula),{
      apellidos: this.newapellidos,
      image: "assets/images/pic.png",
      matricula: this.indice.matricula,
      nombre: this.newnombre
      });
    window.location.reload();
    this.clear();
  }

  indice: any={};
  editando: boolean = false;
  personas: any = [];

  @Input() newnombre: string ="";
  @Input() newapellidos: string ="";

  clear(): void{
    this.newnombre="";
    this.newapellidos="";
    this.editando=false;
    this.indice='';
  }



  track_matricula(index, i){   //función que solo sirve para "manejar" mejor los ciclos del ngFor 
    return i.matricula;
  }

  card_validation(i:any): boolean{ //función que comprueba si un elemento del arreglo de personas está vacío o no, para evitar que se muestre.
    if (typeof i == 'undefined') return false;
    else return true;
  }
}
