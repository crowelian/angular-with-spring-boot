import { createReducer, on } from '@ngrx/store';
import { AntiHero } from '../models/anti-hero.interface';
import { setAntiHeroList } from './anti-hero.actions';

export interface AntiHeroState { // defines the properties of the state
    antiHeroes: ReadonlyArray<AntiHero>;
}

export const initialState: AntiHeroState = { // initial state and the current ACTION
    antiHeroes: []
}

export const antiHeroReducer = createReducer( 
  initialState,
  on(setAntiHeroList, (state, { antiHeroes }) => { return {...state, antiHeroes}}), // list of functions that handle state changes based on the dispatched actions

);