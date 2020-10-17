import { Component, OnInit, Input } from '@angular/core';

export enum ControlType {
  Time = 'time',
  Duration = 'duration'
}

interface ControlData {
  name: string,
  desc: string,
  value: string
}

const CONTROL_DATA = {
  [ControlType.Time]: {
    name: 'Start time',
    desc: 'Event start time',
    value: '18:00'
  },
  [ControlType.Duration]: {
    name: 'Duration',
    desc: 'Choose event duration',
    value: '20 m'
  },
}

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {

  @Input() controlType: ControlType = ControlType.Time;
  public controlData: ControlData;

  constructor() { }

  ngOnInit() {
    this.controlData = CONTROL_DATA[this.controlType];
  }

  private buildForm(): void {

  }

}
