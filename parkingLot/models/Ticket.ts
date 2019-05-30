import { CarInformation } from './CarInformation'

export class Ticket {
  constructor(
    public carInformation: CarInformation,
    public slotNumber: number
  ) {}
}
