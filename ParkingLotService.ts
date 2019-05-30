export class ParkingLotService {
  createParkingLot(totalSlot: number) {
    console.log(`Created a parking lot with ${totalSlot} slots`)
  }

  park(registrationNumber: string, colour: string) {
    console.log('Allocated slot number: 1')
  }

  leave(slotNumber: number) {
    console.log('Slot number 4 is free')
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
