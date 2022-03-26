import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { DetalleComponent } from "./detalle.component";
import { RouterLink } from "@angular/router";
import { RoutesModule } from "../routes.module";


@NgModule(
    {
        imports: [CommonModule,FormsModule,IonicModule,RouterLink, RoutesModule],
        declarations: [DetalleComponent],
        exports: [DetalleComponent]
    }
)
export class DetalleComponentModule {}