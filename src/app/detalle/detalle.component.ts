import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from "@ionic/angular";
import { Location, registerLocaleData } from '@angular/common';
import { getDatabase, onValue, ref, remove } from 'firebase/database';
import { Database } from '@angular/fire/database';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  constructor(private ruta: ActivatedRoute, public actionsheet: ActionSheetController) { }
  ngOnInit() {
    const database = getDatabase();
    const auxpersonadetalle = ref(database, 'personas/'+this.matricula);
    onValue(auxpersonadetalle, (aux) => {
      this.personadetalle = aux.val();
    });
  }
  
  personadetalle: any = {}
  matricula: string = this.ruta.snapshot.params.id;
  personas: any = [];

  eliminar(): any{
    const database = getDatabase();
    remove(ref(database, 'personas/'+this.matricula));
    window.history.back();window.location.reload();
  }


  async presentActionSheet() {
    const actionsheet = await this.actionsheet.create({
      mode:'ios',
      header: 'Opciones',
      buttons: [{
        text: 'Eliminar',
        role: 'destructive',
        icon: 'trash',
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        handler: () => {
          this.eliminar();
        }
      }]
    });

    await actionsheet.present();
    const { role, data } = await actionsheet.onDidDismiss();
    }
 



  
}
