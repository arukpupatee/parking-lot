import { prompt } from 'readline-sync'
import { ParkingLotService } from './parkingLot/ParkingLotService'

function main() {
  const parkingLotService = new ParkingLotService()

  while (true) {
    const input = prompt()
    const [command, ...params] = input.split(' ')

    switch (command) {
      case CommandEnum.CREATE_PARKING_LOT: {
        const [totalSlot] = params

        parkingLotService.createParkingLot(+totalSlot)

        break
      }

      case CommandEnum.PARK: {
        const [registrationNumber, colour] = params

        parkingLotService.park(registrationNumber, colour)

        break
      }

      case CommandEnum.LEAVE: {
        const [slotNumber] = params

        parkingLotService.leave(+slotNumber)

        break
      }

      case CommandEnum.STATUS: {
        parkingLotService.displayStatus()

        break
      }

      case CommandEnum.REGISTRATION_NUMBERS_FOR_CARS_WITH_COLOUR: {
        const [colour] = params

        parkingLotService.displayRegistrationNumbersByColour(colour)

        break
      }

      case CommandEnum.SLOT_NUMBER_FOR_CARS_WITH_COLOUR: {
        const [colour] = params

        parkingLotService.displaySlotNumbersByColour(colour)

        break
      }

      case CommandEnum.SLOT_NUMBER_FOR_REGISTRATION_NUMBER: {
        const [registrationNumber] = params

        parkingLotService.displaySlotNumberByRegistrationNumber(
          registrationNumber
        )

        break
      }
    }
  }
}

enum CommandEnum {
  CREATE_PARKING_LOT = 'create_parking_lot',
  PARK = 'park',
  LEAVE = 'leave',
  STATUS = 'status',
  REGISTRATION_NUMBERS_FOR_CARS_WITH_COLOUR = 'registration_numbers_for_cars_with_colour',
  SLOT_NUMBER_FOR_CARS_WITH_COLOUR = 'slot_numbers_for_cars_with_colour',
  SLOT_NUMBER_FOR_REGISTRATION_NUMBER = 'slot_number_for_registration_number'
}

main()
