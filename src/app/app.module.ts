import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {provideEffects, provideEffectsManager} from "@ngneat/effects-ng";
import {AppEffects} from "./app.effects";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    provideEffectsManager(), provideEffects(AppEffects)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
