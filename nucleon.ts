import { EnergyCore } from './energy'
import { Validator } from './validator'

export class Nucleon {
  energy = new EnergyCore()
  validator = new Validator()

  initialize() {
    this.energy.charge()
    console.log('Nucleon Beam node online')
  }
}
