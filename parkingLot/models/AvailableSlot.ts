import { Slot } from './Slot'

export class AvailableSlot implements Slot {
  number: number

  constructor(number: number) {
    this.number = number
  }
}
