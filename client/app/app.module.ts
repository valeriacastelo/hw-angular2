/**
 * Created by Valeria on 25/07/2017.
 */

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FotoModule} from "./foto/foto.module";
import {AppComponent} from "./app.component";
import {HttpModule} from "@angular/http";
import 'rxjs/add/operator/map';
import {PainelModule} from "./painel/painel.module";
import {CadastroComponent} from "./cadastro/cadastro.component";
import {ListagemComponent} from "./listagem/listagem.component";
import {routing} from "./app.routes";

@NgModule({
    imports: [BrowserModule, FotoModule, HttpModule, PainelModule, routing],
    declarations: [AppComponent, CadastroComponent, ListagemComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}

