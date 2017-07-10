import { NgModule } from '@angular/core';

import { ModalComponent } from './components/modal/modal.component';
import { ModalModule } from 'ngx-bootstrap';

import { InMemoryDataService } from './services/in-memory-data.service';
import { PlayerComponent } from './components/player/player.component';

@NgModule({
  declarations: [
    ModalComponent,
    PlayerComponent
  ],
  imports: [
    ModalModule
  ],
  providers: [ InMemoryDataService ],
  exports: [ 
    ModalComponent,
    PlayerComponent
  ]
})
export class SharedModule {}