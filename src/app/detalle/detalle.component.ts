import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from "@ionic/angular";

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  constructor(private ruta: ActivatedRoute, public actionsheet: ActionSheetController) { }

  ngOnInit() {
    this.obtenerdetalles(this.matricula);
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


  personadetalle: any = {}
  matricula: string = this.ruta.snapshot.params.id;
  obtenerdetalles(matricula: string): any{
  
    for(let i=0; i< this.personas.length; i++){
      if(matricula==this.personas[i].matricula){
        this.personadetalle=this.personas[i];
      }
    }
    return this.personadetalle;
  }
}
