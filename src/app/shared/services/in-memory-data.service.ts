import { Injectable, Injector } from '@angular/core';
import { Response } from '@angular/http';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Team } from '../models/team';
import { Player } from '../models/player';

import { teams } from '../data/teams';
import { players } from '../data/players';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    return { teams, players };
  }
}