import { Slot } from './Slot'
import { ParkedCar } from './ParkedCar'

export class ParkedSlot implements Slot {
  constructor(public number: number, car: ParkedCar) {}
}
