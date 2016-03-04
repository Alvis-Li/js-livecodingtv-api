import Version1 from './Version1'

export default class Livecoding {
  constructor (token) {
    this.v1 = new Version1(token)
  }
}
