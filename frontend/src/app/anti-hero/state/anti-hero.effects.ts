import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AntiHeroService } from '../services/anti-hero.service';
import { AntiHeroActions } from './anti-hero.actions';

@Injectable ()
export class AntiHeroEffects {
    constructor(
        private actions$: Actions, // returns an observable
        private antiHeroService: AntiHeroService,
        private router: Router
      ) {}

  // get list of anti heroes in the external API
  // set retrieved anti hero list in the state
  getAntiHeroes$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(AntiHeroActions.GET_ANTI_HERO_LIST),
        mergeMap(() => this.antiHeroService.getAntiHeroes() // takes an obswervable as input and returns a new obersvable
          .pipe(
            map(antiHeroes => ({ type: AntiHeroActions.SET_ANTI_HERO_LIST, antiHeroes })), // Returns: ({ type: AntiHeroActions.SET_ANTI_HERO_LIST, antiHeroes }))
            catchError(() => EMPTY)
          ))
        )
    }, {dispatch: true}
  );
}