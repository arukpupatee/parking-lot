import { CarInformation } from './CarInformation'
import { Ticket } from './Ticket'
import { ParkedSlot } from './ParkedSlot'
import { Car } from './Car'

export class ParkedCar implements CarInformation {
  constructor(
    public registrationNumber: string,
    public colour: string,
    public ticket: Ticket
  ) {}

  leave(parkedSlot: ParkedSlot) {
    const car = new Car(this.registrationNumber, this.colour)

    car.ticket = this.ticket

    return car
  }
}
