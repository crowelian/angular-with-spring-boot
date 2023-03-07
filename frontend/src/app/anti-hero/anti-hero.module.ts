import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AntiHeroRoutingModule } from './anti-hero-routing.module';
import { FormComponent } from './pages/form/form.component';
import { ListComponent } from './pages/list/list.component';
import { AntiHeroFormComponent } from './components/anti-hero-form/anti-hero-form.component';
import { AntiHeroListComponent } from './components/anti-hero-list/anti-hero-list.component';
import { AntiHeroCommandBarComponent } from './components/anti-hero-command-bar/anti-hero-command-bar.component';

import { MaterialModule } from '../material/material.module';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { AntiHeroEffects } from './state/anti-hero.effects';
import { StoreModule } from '@ngrx/store';
import { antiHeroReducer } from './state/anti-hero.reducers';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    FormComponent,
    ListComponent,
    AntiHeroFormComponent,
    AntiHeroListComponent,
    AntiHeroCommandBarComponent
  ],
  imports: [
    CommonModule,
    AntiHeroRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    MatCardModule,
    HttpClientModule,
    EffectsModule.forFeature([AntiHeroEffects]),
    StoreModule.forFeature('antiHeroState', antiHeroReducer), // register our reducers in the store, first param is key second is returned from the createReducer
  ]
})
export class AntiHeroModule { }
