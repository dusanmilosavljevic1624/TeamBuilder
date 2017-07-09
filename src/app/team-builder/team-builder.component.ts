import { Component, OnInit } from '@angular/core';

import { ModalComponent } from '../shared/components/modal/modal.component';
import { LobbyComponent } from './lobby/lobby.component';

import { TeamsService } from './teams.service';
import { PlayersService } from './players.service';
import { LobbyService } from './lobby.service';

import { Team } from '../shared/models/team';
import { Player } from '../shared/models/player';

@Component({
  selector: 'team-builder',
  templateUrl: './team-builder.component.html',
  styleUrls: ['./team-builder.component.css'],
  providers: [ TeamsService, PlayersService, LobbyService ]
})
export class TeamBuilderComponent implements OnInit {
  teams: any;

  constructor(public teamsService: TeamsService) {}

  ngOnInit() {
    this.teamsService.getPopulatedTeams().subscribe((teams) => this.teams = teams);
  }
}
