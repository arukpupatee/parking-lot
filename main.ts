import { prompt } from 'readline-sync'

function main() {
  const input = prompt()
  const [command, ...params] = input.split(' ')

  switch (command) {
    case CommandEnum.CREATE_PARKING_LOT:
      console.log('create')
      break
    case CommandEnum.PARK:
      console.log('park')
      break
    case CommandEnum.LEAVE:
      console.log('leave')
      break
    case CommandEnum.STATUS:
      console.log('status')
      break
    case CommandEnum.REGISTRATION_NUMBERS_FOR_CARS_WITH_COLOUR:
      console.log('registration_numbers_for_cars_with_colour')
      break
    case CommandEnum.SLOT_NUMBER_FOR_CARS_WITH_COLOUR:
      console.log('slot_numbers_for_cars_with_colour')
      break
    case CommandEnum.SLOT_NUMBER_FOR_REGISTRATION_NUMBER:
      console.log('slot_number_for_registration_number')
      break
  }

  main()
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
