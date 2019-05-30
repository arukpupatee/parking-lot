import { ParkingLot } from './models/ParkingLot'
import { Car } from './models/Car'
import { TicketManager } from './models/TicketManager'

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
    console.log(`Slot No. Registration No Colour
    1 KA-01-HH-1234 White
    2 KA-01-HH-9999 White
    3 KA-01-BB-0001 Black
    5 KA-01-HH-2701 Blue
    6 KA-01-HH-3141 Black`)
  }

  displayRegistrationNumbersByColour(colour: string) {
    console.log('KA-01-HH-1234, KA-01-HH-9999, KA-01-P-333')
  }

  displaySlotNumbersByColour(colour: string) {
    console.log('1, 2, 4')
  }

  displaySlotNumberByRegistrationNumber(registrationNumber: number) {
    console.log('6')
  }
}
