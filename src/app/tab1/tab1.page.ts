import { Component, Input } from '@angular/core';
import { getDatabase, onValue, ref } from 'firebase/database';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  ngOnInit(): void {
    const database = getDatabase();
    const auxpersona = ref(database, 'personas/');
    onValue(auxpersona, (aux) => {
      this.personas = aux.val();
      this.personas = Object.values(this.personas);
    });
  }
  

  personas: any = [];

  track_matricula(index, i){   //función que solo sirve para "manejar" mejor los ciclos del ngFor 
    return i.matricula;
  }

  card_validation(i:any): boolean{ //función que comprueba si un elemento del arreglo de personas está vacío o no, para evitar que se muestre.
    if (typeof i == 'undefined') return false;
    else return true;
  }


}
