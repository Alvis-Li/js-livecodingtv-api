import request from 'request-promise'

export const livecoding = {
  v1 (token) {
    const baseUri = 'https://www.livecoding.tv/api/v1'

    return {
      /**
       * Perform a request
       *
       * @param  {String}  method   HTTP method (GET, POST etc.)
       * @param  {String}  endpoint Resource endpoint
       * @param  {Options} options  Request options
       *
       * @return {Promise}          Response
       */
      request (method, endpoint, options) {
        return request({
          method: method,
          url: baseUri + endpoint,
          auth: { bearer: token },
          json: true,
          ...options
        })
      },

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
      },

      /**
       * Get a list of coding categories
       *
       * @return {Promise} response
       */
      codingCategories () {
        return this.get('/codingcategories')
      },

      /**
       * Get a single coding category
       *
       * @return {Promise} response
       */
      codingCategory (name) {
        return this.get(`/codingcategories/${name}`)
      },

      /**
       * Get a list of livestreams
       *
       * @return {Promise} response
       */
      livestreams () {
        return this.get('/livestreams')
      },

      /**
       * Get the authenticated user
       *
       * @return {Promise} response
       */
      me () {
        return this.get('/user')
      }
    }
  }
}

export default livecoding
