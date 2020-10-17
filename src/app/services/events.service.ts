import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

import { EventData, EventType } from '../models/event.model';

const exampleData: EventData[] = [
  {
    id: 1,
    type: EventType.CarRental,
    title: 'Mercedes Benz',
    st: '2020-10-02T20:00',
    img: '../../assets/images/car.png',
    vehicle: {
      type: 'E Class',
      gearbox: 'A',
      ac: true,
    },
  },
  {
    id: 2,
    type: EventType.Hotel,
    title: 'Relais du Silence Aux Vieux Remparts',
    st: '2020-10-02T20:00',
    img: '../../assets/images/view1.jpg',
    hotel: {
      rating: '8.5',
      starRating: 5,
      category: 'Premium Hotel',
    },
  },
  {
    id: 3,
    type: EventType.Place,
    title: 'Hyde-park',
    st: '2020-10-02T20:00',
    img: '../../assets/images/view2.jpg',
    place: {
      category: 'Park',
    },
  },
];

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  public getEvents(): Observable<EventData[]> {
    return of(exampleData);
  }

  public deleteEvents(id: number): Observable<EventData[]> {
    const index = exampleData.findIndex(item => item.id === id);
    exampleData.splice(index, 1);
    return of(exampleData);
  }

  public addEvent(event: EventData, index: number): Observable<EventData[]> {
    exampleData.splice(index, 0, event);
    return of(exampleData);
  }
}
