import { Component, OnInit } from '@angular/core';

import { EventsService } from './../../services/events.service';
import { EventData, EventType } from '../../models/event.model';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent implements OnInit {

  public events: EventData[];

  constructor(
    private eventsService: EventsService,
  ) { }

  ngOnInit() {
    this.eventsService.getEvents().subscribe((events: EventData[]) => {
      this.events = events;
    });
  }

  public onDeleteEvent(id: number): void {
    this.eventsService.deleteEvents(id).subscribe((events: EventData[]) => {
      this.events = events;
    });
  }

  public onAddEvent(eventType: EventType, index: number): void {
    const newEvent: EventData = {
      id: this.events.length,
      type: eventType,
      title: 'NEW EVENT',
      st: '2020-10-02T20:00',
      img: '../../../assets/images/view1.jpg',
    };
    this.eventsService.addEvent(newEvent, ++index).subscribe((events: EventData[]) => {
      this.events = events;
    });
  }

}
