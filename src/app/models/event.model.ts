import { Vehicle } from './vehicle.model';
import { Place } from './place.model';
import { Hotel } from './hotel.model';

export interface EventData {
  id: number;
  type: EventType;
  title: string;
  img: string;
  st: string;
  vehicle?: Vehicle;
  hotel?: Hotel;
  place?: Place;
}

export enum EventType {
  CarRental = 'car-rental',
  Hotel = 'hotel',
  Place = 'place',
}
