import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgModule } from '@angular/core';

import { ModalModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { InMemoryDataService } from './shared/services/in-memory-data.service';
import { SharedModule } from './shared/shared.module';
import { TeamBuilderModule } from './team-builder/team-builder.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    ModalModule.forRoot(),
    TeamBuilderModule,
    SharedModule
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }