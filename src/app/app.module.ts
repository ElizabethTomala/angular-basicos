import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/listado/heroes.module';
import { ContadorModule } from './contador/contador.module';

// Crear un modulo  ContadorModule
//hacer la declaraciones y exportaciones ContadorModule
//declaraciones y exxportaciones


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
