import { hashData } from '../utils/hash'

export class Validator {
  validate(data: string) {
    return hashData(data)
  }
}
