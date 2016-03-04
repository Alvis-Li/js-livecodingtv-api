import proxyquire from 'proxyquire'
import { createSpy } from 'expect'

export const requestSpy = createSpy().andReturn(Promise.resolve({ foo: 'bar' }))

const { default: Livecoding } = proxyquire('../../src/Livecoding', {
  'Version1': proxyquire('../../src/Version1', {
    'request-promise': requestSpy
  })
})

export default Livecoding
