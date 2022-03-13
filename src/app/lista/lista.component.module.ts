import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { ListaComponent } from "./lista.component";

@NgModule(
    {
        imports: [CommonModule,FormsModule,IonicModule],
        declarations: [ListaComponent],
        exports: [ListaComponent]
    }
)
export class ListaComponentModule {}