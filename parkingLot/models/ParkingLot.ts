import { range } from '../libs/range'
import { Slot } from './Slot'
import { AvailableSlot } from './AvailableSlot'

export class ParkingLot {
  slots: Slot[]

  constructor(totalSlot: number) {
    const slotNumbers = range(1, totalSlot)

    this.slots = slotNumbers.map(slotNumber => new AvailableSlot(slotNumber))
  }
}
