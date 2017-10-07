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

@NgModule({
    imports: [BrowserModule, FotoModule, HttpModule, PainelModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}

