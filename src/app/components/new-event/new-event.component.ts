import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { EventType } from '../../models/event.model';

const OPTIONS = [
    { type: EventType.CarRental, title: 'Rentals car' },
    { type: EventType.Hotel, title: 'Hotel' },
    { type: EventType.Place, title: 'Place' }
  ];

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '*',
      })),
      state('closed', style({
        height: '0px',
        opacity: 0,
      })),
      transition('open <=> closed', [
        animate('0.2s')
      ]),
    ]),
  ],
})
export class NewEventComponent implements OnInit {

  @Output() addEvent = new EventEmitter<EventType>();
  public eventOptions = OPTIONS;
  public isExpanded = false;

  constructor() { }

  ngOnInit() {
  }

  public getIcon(type: string): string {
    switch (type) {
      case EventType.CarRental:
        return '../../../assets/images/icons/big_car.svg';
      case EventType.Hotel:
        return '../../../assets/images/icons/big_hotel.svg';
      case EventType.Place:
        return '../../../assets/images/icons/place.svg';
    }
  }

  public openDropdown(): void {
    this.isExpanded = !this.isExpanded;
  }

  public addNewEvent(eventType: EventType): void {
    this.isExpanded = !this.isExpanded;
    this.addEvent.emit(eventType);
  }

}
