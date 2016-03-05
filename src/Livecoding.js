import Version1 from './Version1'

/**
 * Livecoding API client
 */
export default class Livecoding {

  /**
   * Create a new instance
   *
   * @param  {String} token Access token
   *
   * @return {Object}       Livecoding API client
   */
  constructor (token) {
    /**
     * @type {Version1}
     */
    this.v1 = new Version1(token)
  }

}
