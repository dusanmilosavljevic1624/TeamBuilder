import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '../shared/shared.module';
import { TeamBuilderComponent } from './team-builder.component';
import { TeamComponent } from './team/team.component';
import { LobbyComponent } from './lobby/lobby.component';
import { PlayersComponent } from './team/players/players.component';

@NgModule({
  declarations: [
    TeamBuilderComponent,
    TeamComponent,
    PlayersComponent,
    LobbyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [ ],
  exports: [ TeamBuilderComponent ]
})
export class TeamBuilderModule { }