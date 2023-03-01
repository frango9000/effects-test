import { Component } from '@angular/core';
import {Actions} from "@ngneat/effects-ng";
import {loadApp} from "./app.effects";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private actions: Actions) {}

  dispatch() {
    this.actions.dispatch(loadApp({user:'id'}));
  }
}
