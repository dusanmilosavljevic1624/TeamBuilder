import { NgModule } from '@angular/core';

import { ModalComponent } from './components/modal/modal.component';
import { ModalModule } from 'ngx-bootstrap';

import { InMemoryDataService } from './services/in-memory-data.service';

@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    ModalModule
  ],
  providers: [ InMemoryDataService ],
  exports: [ ModalComponent ]
})
export class SharedModule {}