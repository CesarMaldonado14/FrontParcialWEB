import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IngresodatosComponent } from './ingresodatos/ingresodatos.component';

@NgModule({
  declarations: [
    AppComponent,
    IngresodatosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
