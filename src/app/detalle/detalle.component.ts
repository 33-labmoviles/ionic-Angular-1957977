import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from "@ionic/angular";
import { DbservService } from '../dbserv.service';
import { Location, registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  constructor(private ruta: ActivatedRoute, public actionsheet: ActionSheetController, private http: HttpClient, private db: DbservService) { }





  indice: string = ''; //Variable que guardará el indice de la persona a buscar


  ngOnInit() {
    this.db.getpersonas().subscribe(arr => { 
      this.personas=arr; //Guardamos arr (lo de la database) en la variable local personas 
      //TODO
      for(let i=0; i< this.personas.lenght; i++){

      }
      this.indice = 
      this.db.getpersonadetalle(this.indice).subscribe(det => {this.personadetalle=det;}) //Mandamos a llamar a getpersonadetalle para que nos traiga solo un objeto dado el indice.
    });
  }

  
  personadetalle: any = {}
  matricula: string = this.ruta.snapshot.params.id;
  personas: any = [];

  eliminar(id: string): any{
    this.db.deletepersona(id).subscribe( arr => {console.log(id);window.history.back();})
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
          this.eliminar(this.indice);
        }
      }, {
        text: 'Compartir',
        icon: 'share',
        data: 10
      }, {
        text: 'Me gusta',
        icon: 'heart'
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel'
      }]
    });

    await actionsheet.present();
    const { role, data } = await actionsheet.onDidDismiss();
    }
 



  
}
