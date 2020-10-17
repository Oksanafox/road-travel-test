import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { EventData, EventType } from '../../models/event.model';
import { ControlType } from '../../components/control/control.component';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  @Input() public event: EventData;
  @Input() public editMode = false;
  @Output() deleteEvent = new EventEmitter<number>();
  public readonly controlTypes = ControlType;

  constructor() { }

  ngOnInit() {
  }

  public delete(): void {
    this.deleteEvent.emit(this.event.id);
  }

}
