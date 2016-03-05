import Promise from 'bluebird'
import proxyquire from 'proxyquire'
import { createSpy } from 'expect'

const paths = {
  Livecoding: __dirname + '/../../src/Livecoding',
  Version1: __dirname + '/../../src/Version1'
}

export const requestSpy = createSpy().andReturn(Promise.resolve({ foo: 'bar' }))

const Version1 = proxyquire(paths.Version1, {
  'request-promise': requestSpy
})

const Livecoding = proxyquire(paths.Livecoding,
  {
    'Version1': Version1
  }
)

export default Livecoding.default
