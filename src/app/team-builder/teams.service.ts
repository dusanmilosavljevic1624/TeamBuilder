import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/forkJoin'

import { PlayersService } from './players.service';

@Injectable()
export class TeamsService {
  private teamsUrl: string = 'api/teams';

  constructor(private playersService: PlayersService, private http: Http) {}

  getTeams() {
    return this.http.get(this.teamsUrl).map((res: Response) => res.json().data);
  }

  getPopulatedTeams() {
    return Observable.forkJoin([
      this.http.get(this.teamsUrl).map(res => res.json().data),
      this.playersService.getPlayersByTeam()
    ]).map((data) => {
      let teams = data[0];
      let players = data[1];

      teams.forEach((team) => {
        team.players = players[team.id];
      });

      return teams;
    })
  }

  getTeam(id: number) {
    return this.http.get(`${this.teamsUrl}/${id}`).map((res: Response) => res.json().data);
  }
}