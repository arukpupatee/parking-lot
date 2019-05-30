import { ParkingLot } from './models/ParkingLot'
import { Car } from './models/Car'
import { TicketManager } from './models/TicketManager'
import { Ticket } from './models/Ticket'

export class ParkingLotService {
  parkingLot: ParkingLot
  ticketManager: TicketManager

  constructor() {
    this.parkingLot = new ParkingLot(0)
    this.ticketManager = new TicketManager(this.parkingLot)
  }

  createParkingLot(totalSlot: number) {
    this.parkingLot = new ParkingLot(totalSlot)
    this.ticketManager = new TicketManager(this.parkingLot)

    console.log(`Created a parking lot with ${totalSlot} slots`)
  }

  park(registrationNumber: string, colour: string) {
    const car = new Car(registrationNumber, colour)
    const ticket = this.ticketManager.issueTicket({ ...car })

    car.receiveTicket(ticket)

    const slot = this.parkingLot.getSlotByNumber(ticket.slotNumber)
    const parkedCar = car.park(slot)

    this.parkingLot.updateParkedCar(slot, parkedCar)

    console.log(`Allocated slot number: ${slot.number}`)
  }

  leave(slotNumber: number) {
    const parkedSlot = this.parkingLot.getParkedSlotByNumber(slotNumber)
    const parkedCar = this.parkingLot.getParkedCarInSlot(parkedSlot)

    const car = parkedCar.leave(parkedSlot)

    this.parkingLot.freeSlot(parkedSlot)

    const ticket = car.returnTicket()

    this.ticketManager.receiveTicket(ticket)

    console.log(`Slot number ${parkedSlot} is free`)
  }

  displayStatus() {
    const tickets = this.ticketManager.tickets

    this.displayStatusHeader()
    this.displayStatusBody(tickets)
  }

  displayRegistrationNumbersByColour(colour: string) {
    const tickets = this.ticketManager.tickets
    const registrationNumbers = tickets
      .filter(ticket => ticket.carInformation.colour === colour)
      .map(ticket => ticket.carInformation.registrationNumber)

    console.log(registrationNumbers.join(', '))
  }

  displaySlotNumbersByColour(colour: string) {
    const tickets = this.ticketManager.tickets
    const slotNumbers = tickets
      .filter(ticket => ticket.carInformation.colour === colour)
      .map(ticket => ticket.slotNumber)

    console.log(slotNumbers.join(', '))
  }

  displaySlotNumberByRegistrationNumber(registrationNumber: string) {
    try {
      const tickets = this.ticketManager.tickets
      const expectedTicket = tickets.find(
        ticket =>
          ticket.carInformation.registrationNumber === registrationNumber
      )

      if (!expectedTicket) throw new Error('Not found')

      console.log(expectedTicket.slotNumber)
    } catch (error) {
      console.log('Not found')
    }
  }

  private displayStatusHeader() {
    console.log('Slot No. Registration No Colour')
  }

  private displayStatusBody(tickets: Ticket[]) {
    tickets.forEach(ticket => {
      const slotNumber = ticket.slotNumber
      const registrationNumber = ticket.carInformation.registrationNumber
      const colour = ticket.carInformation.colour

      console.log(`${slotNumber} ${registrationNumber} ${colour}`)
    })
  }
}
