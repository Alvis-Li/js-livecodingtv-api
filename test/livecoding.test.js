/* eslint-env mocha */
import expect, { createSpy } from 'expect'
import livecoding, { requestSpy } from './mocks/livecoding.mock'

const token = ':)'
const v1 = livecoding.v1(token)

describe('v1.request', () => {
  it('should perform a request', done => {
    v1.request('GET', '/test', { abc: 123 })
      .then(() => {
        expect(requestSpy).toHaveBeenCalledWith({
          method: 'GET',
          url: 'https://www.livecoding.tv/api/v1/test',
          auth: { bearer: token },
          json: true,
          abc: 123
        })
        done()
      })
      .catch(err => done(err))
  })
})

describe('v1.get', () => {
  it('should make a GET request', done => {
    v1.request = createSpy().andReturn(Promise.resolve(null))

    v1.get('/test', { a: 'b' })
      .then(() => {
        expect(v1.request).toHaveBeenCalledWith(
          'GET',
          '/test',
          { qs: { a: 'b' } }
        )
        done()
      })
      .catch(err => done(err))
  })
})

describe('v1.codingCategories', () => {
  it('should make a GET request for a list of coding categories', done => {
    v1.get = createSpy().andReturn(Promise.resolve(null))

    v1.codingCategories()
      .then(() => {
        expect(v1.get).toHaveBeenCalledWith('/codingcategories')
        done()
      })
      .catch(err => done(err))
  })
})

describe('v1.codingCategory', () => {
  it('should make a GET request for a single coding category', done => {
    v1.get = createSpy().andReturn(Promise.resolve(null))

    const category = 'Node.js'

    v1.codingCategory(category)
      .then(() => {
        expect(v1.get).toHaveBeenCalledWith(`/codingcategories/${category}`)
        done()
      })
      .catch(err => done(err))
  })
})

describe('v1.livestreams', () => {
  it('should make a GET request for a list of livestreams', done => {
    v1.get = createSpy().andReturn(Promise.resolve(null))

    v1.livestreams()
      .then(() => {
        expect(v1.get).toHaveBeenCalledWith(`/livestreams`)
        done()
      })
      .catch(err => done(err))
  })
})

describe('v1.me', () => {
  it('should make a GET request for the current user\'s details', done => {
    v1.get = createSpy().andReturn(Promise.resolve(null))

    v1.me()
      .then(() => {
        expect(v1.get).toHaveBeenCalledWith('/user')
        done()
      })
      .catch(err => done(err))
  })
})
