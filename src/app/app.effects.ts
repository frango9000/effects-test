import {Injectable} from "@angular/core";
import {of, switchMap} from "rxjs";
import {actionsFactory, createEffect, ofType, props} from "@ngneat/effects";

export const appActions = actionsFactory('app');

// We can declare an action by passing it a type and an optional payload.
export const loadApp = appActions.create('Init App', props<{ user: string }>());

@Injectable({ providedIn: 'root' })
export class AppEffects {
  loadApp$ = createEffect((actions) =>
    actions.pipe(
      ofType(loadApp),
      switchMap(() => of({ user: 'id' }))
    )
  );
}
