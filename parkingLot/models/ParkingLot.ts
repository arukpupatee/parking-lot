import { Slot } from './Slot'
import { AvailableSlot } from './AvailableSlot'
import { AllocatedSlot } from './AllocatedSlot'
import { ParkedCar } from './ParkedCar'
import { ParkedSlot } from './ParkedSlot'

export class ParkingLot {
  slots: Slot[]

  constructor(totalSlot: number) {
    const slotNumbers = [...Array(totalSlot).keys()].map(i => i + 1)

    this.slots = slotNumbers.map(slotNumber => new AvailableSlot(slotNumber))
  }

  getAvailableSlot(): AvailableSlot {
    const availableSlot = this.slots.find(slot => slot instanceof AvailableSlot)

    if (!availableSlot) throw new Error('Available slot not found')

    return availableSlot
  }

  getSlotByNumber(slotNumber: number): Slot {
    const slot = this.slots.find(slot => slot.number === slotNumber)

    if (!slot) throw new Error('Slot not found')

    return slot
  }

  getParkedSlotByNumber(slotNumber: number): ParkedSlot {
    const slot = this.slots.find(slot => slot.number === slotNumber)

    if (!slot) throw new Error('Slot not found')
    if (!(slot instanceof ParkedSlot)) throw new Error('Parked slot not found')

    return slot
  }

  getParkedCarInSlot(parkedSlot: ParkedSlot): ParkedCar {
    return parkedSlot.car
  }

  allocateSlot(availableSlot: AvailableSlot): AllocatedSlot {
    const allocatedSlot = new AllocatedSlot(availableSlot.number)

    this.updateSlot(allocatedSlot)

    return allocatedSlot
  }

  freeSlot(parkedSlot: ParkedSlot): AvailableSlot {
    const availableSlot = new AvailableSlot(parkedSlot.number)

    this.updateSlot(availableSlot)

    return availableSlot
  }

  updateParkedCar(allocatedSlot: AllocatedSlot, car: ParkedCar) {
    const parkedSlot = new ParkedSlot(allocatedSlot.number, car)

    this.updateSlot(parkedSlot)
  }

  private updateSlot(slot: Slot) {
    this.slots[slot.number - 1] = slot
  }
}
