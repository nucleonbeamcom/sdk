import { Block } from './block'

export class Ledger {
  blocks: Block[] = []

  add(block: Block) {
    this.blocks.push(block)
  }
}
