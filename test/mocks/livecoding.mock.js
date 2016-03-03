import proxyquire from 'proxyquire'
import { createSpy } from 'expect'

export const requestSpy = createSpy().andReturn(Promise.resolve({ foo: 'bar' }))

const { livecoding } = proxyquire('../../src/livecoding', {
  'request-promise': requestSpy
})

export default livecoding
