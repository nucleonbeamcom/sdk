export class EnergyCore {
  private energyLevel = 0

  charge() {
    this.energyLevel = Math.random()
  }

  output() {
    return this.energyLevel
  }
}
