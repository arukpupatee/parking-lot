import { Ticket } from './Ticket'
import { ParkingLot } from './ParkingLot'
import { CarInformation } from './CarInformation'

export class TicketManager {
  tickets: Ticket[] = []

  constructor(public parkingLot: ParkingLot) {}

  issueTicket(carInformation: CarInformation): Ticket {
    const availableSlot = this.parkingLot.getAvailableSlot()
    const allocatedSlot = this.parkingLot.allocateSlot(availableSlot)
    const ticket = new Ticket(carInformation, allocatedSlot.number)

    this.tickets.push(ticket)

    return ticket
  }

  receiveTicket(returnedTicket: Ticket) {
    this.tickets = this.tickets.filter(ticket => ticket !== returnedTicket)
  }
}
