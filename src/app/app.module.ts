import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { RouteComponent } from './components/route/route.component';
import { EventsService } from './services/events.service';
import { NewEventComponent } from './components/new-event/new-event.component';
import { ControlComponent } from './components/control/control.component';

@NgModule({
  declarations: [
    AppComponent,
    EventCardComponent,
    RouteComponent,
    NewEventComponent,
    ControlComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [
    EventsService,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
