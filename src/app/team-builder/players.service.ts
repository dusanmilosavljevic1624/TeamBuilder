import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Player } from '../shared/models/player';

@Injectable()
export class PlayersService {
  private playersUrl = 'api/players';

  constructor(public http: Http) {}

  getPlayers(): Observable<Player[]> {
    return this.http.get(this.playersUrl).map((res: Response) => res.json().data);
  }

  getPlayersByTeam(): Observable<object> {
    return this.http.get(this.playersUrl).map(res => {
        let players = res.json().data;
        let teamGroups = {};

        players.forEach((player) => {
          if(!teamGroups[player.teamId]) {
            teamGroups[player.teamId] = [];
          }

          teamGroups[player.teamId].push(player);
        });

        return teamGroups;
      })
  }
}