import request from 'request-promise'

const baseUri = 'https://www.livecoding.tv/api/v1'

/**
 * Api version 1 client
 */
export default class Version1 {

  /**
   * Create a new instance
   *
   * @param  {String} token Access token
   * @return {Object}       API version 1 client
   */
  constructor (token) {
    /**
     * @type {String}
     */
    this.token = token
  }

  /**
   * Perform a request
   *
   * @param  {String}  method   HTTP method (GET, POST etc.)
   * @param  {String}  endpoint Resource endpoint
   * @param  {Object}  options  Request options
   *
   * @return {Promise}          Response
   */
  request (method, endpoint, options) {
    return request({
      method: method,
      url: baseUri + endpoint,
      auth: { bearer: this.token },
      json: true,
      ...options
    })
  }

  /**
   * Perform a GET request
   *
   * @param  {String}  endpoint Resource endpoint
   * @param  {Object}  query    Request query params
   *
   * @return {Promise}          Response
   */
  get (endpoint, query = {}) {
    return this.request('GET', endpoint, { qs: query })
  }

  /**
   * Get a list of coding categories
   *
   * @return {Promise} Response
   */
  codingCategories () {
    return this.get('/codingcategories')
  }

  /**
   * Get a single coding category
   *
   * @param {String} name Category name eg. Javascript
   *
   * @return {Promise} Response
   */
  codingCategory (name) {
    return this.get(`/codingcategories/${name}`)
  }

  /**
   * Get a list of livestreams
   *
   * @return {Promise} Response
   */
  livestreams () {
    return this.get('/livestreams')
  }

  /**
   * Get a list of on-air livestreams
   *
   * @return {Promise} Response
   */
  livestreamsOnAir () {
    return this.get('/livestreams/onair')
  }

  /**
   * Get the current/latest livestream for a user
   *
   * @param {String} slug User's slug (username)
   *
   * @return {Promise} Response
   */
  livestreamForUser (slug) {
    return this.get(`/livestreams/${slug}`)
  }

  /**
   * Get a list of spoken languages
   *
   * @return {Promise} Response
   */
  languages () {
    return this.get('/languages')
  }

  /**
   * Get a spoken language by its name
   *
   * @param {String} name Language name
   *
   * @return {Promise} Response
   */
  language (name) {
    return this.get(`/language/${name}`)
  }

  /**
   * Get a user by their slug
   *
   * @param  {String} slug User's slug (username)
   *
   * @return {Promise} Response
   */
  user (slug) {
    return this.get(`/users/${slug}`)
  }

  /**
   * Get a list of the scheduled broadcasts
   *
   * @return {Promise} Response
   */
  scheduledBroadcasts () {
    return this.get('/scheduledbroadcast')
  }

  /**
   * Get a single scheduled broadcast by its ID
   *
   * @param  {Number} id Scheduled broadcast ID
   *
   * @return {Promise} Response
   */
  scheduledBroadcast (id) {
    return this.get(`/scheduledbroadcast/${id}`)
  }

  /**
   * Get a list of videos
   *
   * @return {Promise} Response
   */
  videos () {
    return this.get('/videos')
  }

  /**
   * Get a single video by its
   *
   * @param  {String} slug Video slug
   *
   * @return {Promise} Response
   */
  video (slug) {
    return this.get(`/videos/${slug}`)
  }

  /**
  * Get the authenticated user
  *
  * @return {Promise} Response
  */
  me () {
    return this.get('/user')
  }

  /**
   * Get the followers of the currently authenticated user
   *
   * @return {Promise} Response
   */
  myFollowers () {
    return this.get('/user/followers')
  }

  /**
   * Get the users that the currently authenticated user is following
   *
   * @return {Promise} Response
   */
  myFollows () {
    return this.get('/user/follows')
  }

  /**
   * Get the chat account for the currently authenticated user
   *
   * @return {Promise} Response
   */
  myChatAccount () {
    return this.get('/user/chat/account')
  }

  /**
   * Get the current/latest livestream for the currently authenticated user
   *
   * @return {Promise} Response
   */
  myLivestream () {
    return this.get('/user/livestreams')
  }

  /**
   * Get a list of videos for the currently authenticated user
   *
   * @return {Promise} Response
   */
  myVideos () {
    return this.get('/user/videos')
  }

  /**
   * Get the latest videos for the currently authenticated user
   *
   * @return {Promise} Response
   */
  myLatestVideos () {
    return this.get('/user/videos/latest')
  }
}
