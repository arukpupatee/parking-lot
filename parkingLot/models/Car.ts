import { AllocatedSlot } from './AllocatedSlot'
import { CarInformation } from './CarInformation'
import { ParkedCar } from './ParkedCar'
import { Ticket } from './Ticket'

export class Car implements CarInformation {
  ticket?: Ticket

  constructor(public registrationNumber: string, public colour: string) {}

  receiveTicket(ticket: Ticket) {
    this.ticket = ticket
  }

  park(allocatedSlot: AllocatedSlot): ParkedCar {
    if (!this.ticket) throw new Error('Can not park without ticket')

    return new ParkedCar(this.registrationNumber, this.colour, this.ticket)
  }

  returnTicket(): Ticket {
    if (!this.ticket) throw new Error('Ticket is missing')

    return this.ticket
  }
}
