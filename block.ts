export class Block {
  constructor(
    public index: number,
    public hash: string,
    public timestamp: number = Date.now()
  ) {}
}
