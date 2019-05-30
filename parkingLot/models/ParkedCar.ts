import { CarInformation } from './CarInformation'
import { Ticket } from './Ticket'

export class ParkedCar implements CarInformation {
  constructor(
    public registrationNumber: string,
    public colour: string,
    public ticket: Ticket
  ) {}
}
