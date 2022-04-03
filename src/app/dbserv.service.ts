import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/compat';

@Injectable({
  providedIn: 'root'
})
export class DbservService {

  constructor(private http: HttpClient) { }



  getpersonas(): any {
    return this.http.get('https://lab-appmoviles-default-rtdb.firebaseio.com/personas.json');
  }

  getpersonadetalle(num: string): any {
    return this.http.get('https://lab-appmoviles-default-rtdb.firebaseio.com/personas/'+num+'.json');
  }

  deletepersona (id: string): any {
    return this.http.delete('https://lab-appmoviles-default-rtdb.firebaseio.com/personas/'+id+'.json');
  }

  postpersona(nuevo: any) {
    return this.http.post('https://lab-appmoviles-default-rtdb.firebaseio.com/personas.json', nuevo);
  }

  putpersona(id: string, nuevo: any) {
    return this.http.put('https://lab-appmoviles-default-rtdb.firebaseio.com/personas/'+id+'.json', nuevo);
  }

}
