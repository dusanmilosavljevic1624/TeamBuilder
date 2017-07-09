import { Component, Input, Output, EventEmitter, ViewChild, OnInit } from '@angular/core';

import { PlayersComponent } from './players/players.component';
import { LobbyService } from '../lobby.service';

import { Player } from '../../shared/models/player';
import { Team } from '../../shared/models/team';

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  @Input() team: any;
  @ViewChild(PlayersComponent) players: PlayersComponent;

  constructor(private lobbyService: LobbyService) {}

  selectPlayer(player: Player) {
    this.lobbyService.addPlayer(player);
  }

  belongsToTeam(obj: any) {
    return obj.teamId === this.team.id;
  }

  addPlayer(player: Player) {
    if(this.belongsToTeam(player)) {
      this.team.players.push(player);
    }
  }

  removePlayer(player: Player) {
    if(this.belongsToTeam(player)) {
      this.team.players = this.team.players.filter((p) => player.id !== p.id);
    }
  }

  revealPlayers() {
    this.players.togglePlayers();
  }

  ngOnInit() {
    this.lobbyService.playerRemoved$.subscribe(this.addPlayer.bind(this));
    this.lobbyService.playerAdded$.subscribe(this.removePlayer.bind(this));
  }
}