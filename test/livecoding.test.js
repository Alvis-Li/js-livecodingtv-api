/* eslint-env mocha */
import Promise from 'bluebird'
import expect, { createSpy } from 'expect'
import Livecoding, { requestSpy } from './mocks/livecoding.mock'

const token = ':)'
const v1 = new Livecoding(token).v1

describe('v1.request', () => {
  it('should perform a request', (done) => {
    v1.request('GET', '/users', { abc: 123 })
      .then(() => {
        expect(requestSpy).toHaveBeenCalledWith({
          method: 'GET',
          url: 'https://www.livecoding.tv/api/v1/users',
          auth: { bearer: token },
          json: true,
          abc: 123
        })
        done()
      })
      .catch((err) => done(err))
  })
})

describe('v1.get', () => {
  it('should make a GET request', (done) => {
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
      .catch((err) => done(err))
  })
})

describe('v1.codingCategories', () => {
  it('should get a list of coding categories', (done) => {
    v1.get = createSpy().andReturn(Promise.resolve(null))

    v1.codingCategories()
      .then(() => {
        expect(v1.get).toHaveBeenCalledWith('/codingcategories')
        done()
      })
      .catch((err) => done(err))
  })
})

describe('v1.codingCategory', () => {
  it('should get a single coding category', (done) => {
    v1.get = createSpy().andReturn(Promise.resolve(null))

    const category = 'Node.js'

    v1.codingCategory(category)
      .then(() => {
        expect(v1.get).toHaveBeenCalledWith(`/codingcategories/${category}`)
        done()
      })
      .catch((err) => done(err))
  })
})

describe('v1.livestreamForUser', () => {
  it('should get the current/latest livestream for a user', (done) => {
    v1.get = createSpy().andReturn(Promise.resolve(null))

    const user = 'jordan'

    v1.livestreamForUser(user)
      .then(() => {
        expect(v1.get).toHaveBeenCalledWith(`/livestreams/${user}`)
        done()
      })
      .catch((err) => done(err))
  })
})

describe('v1.livestreams', () => {
  it('should get a list of livestreams', (done) => {
    v1.get = createSpy().andReturn(Promise.resolve(null))

    v1.livestreams()
      .then(() => {
        expect(v1.get).toHaveBeenCalledWith('/livestreams')
        done()
      })
      .catch((err) => done(err))
  })
})

describe('v1.livestreamsOnAir', () => {
  it('should get a list of on-air livestreams', (done) => {
    v1.get = createSpy().andReturn(Promise.resolve(null))

    v1.livestreamsOnAir()
      .then(() => {
        expect(v1.get).toHaveBeenCalledWith('/livestreams/onair')
        done()
      })
      .catch((err) => done(err))
  })
})

describe('v1.languages', () => {
  it('should get a list of spoken languages', (done) => {
    v1.get = createSpy().andReturn(Promise.resolve(null))

    v1.languages()
      .then(() => {
        expect(v1.get).toHaveBeenCalledWith('/languages')
        done()
      })
      .catch((err) => done(err))
  })
})

describe('v1.language', () => {
  it('should get a spoken language by its name', (done) => {
    v1.get = createSpy().andReturn(Promise.resolve(null))

    const name = 'English'

    v1.language(name)
      .then(() => {
        expect(v1.get).toHaveBeenCalledWith(`/language/${name}`)
        done()
      })
      .catch((err) => done(err))
  })
})

describe('v1.me', () => {
  it('should get the current user\'s details', (done) => {
    v1.get = createSpy().andReturn(Promise.resolve(null))

    v1.me()
      .then(() => {
        expect(v1.get).toHaveBeenCalledWith('/user')
        done()
      })
      .catch((err) => done(err))
  })
})

describe('v1.myFollowers', () => {
  it('should get followers for the current user', (done) => {
    v1.get = createSpy().andReturn(Promise.resolve(null))

    v1.myFollowers()
      .then(() => {
        expect(v1.get).toHaveBeenCalledWith('/user/followers')
        done()
      })
      .catch((err) => done(err))
  })
})

describe('v1.myFollows', () => {
  it('should get users that the current user is following', (done) => {
    v1.get = createSpy().andReturn(Promise.resolve(null))

    v1.myFollows()
      .then(() => {
        expect(v1.get).toHaveBeenCalledWith('/user/follows')
        done()
      })
      .catch((err) => done(err))
  })
})

describe('v1.myChatAccount', () => {
  it('should get users that the current user is following', (done) => {
    v1.get = createSpy().andReturn(Promise.resolve(null))

    v1.myChatAccount()
      .then(() => {
        expect(v1.get).toHaveBeenCalledWith('/user/chat/account')
        done()
      })
      .catch((err) => done(err))
  })
})

describe('v1.myLivestream', () => {
  it('should get the current user\'s current/latest livestream', (done) => {
    v1.get = createSpy().andReturn(Promise.resolve(null))

    v1.myLivestream()
      .then(() => {
        expect(v1.get).toHaveBeenCalledWith('/user/livestreams')
        done()
      })
      .catch((err) => done(err))
  })
})

describe('v1.myVideos', () => {
  it('should get the current user\'s videos', (done) => {
    v1.get = createSpy().andReturn(Promise.resolve(null))

    v1.myVideos()
      .then(() => {
        expect(v1.get).toHaveBeenCalledWith('/user/videos')
        done()
      })
      .catch((err) => done(err))
  })
})

describe('v1.myLatestVideos', () => {
  it('should get the current user\'s latest videos', (done) => {
    v1.get = createSpy().andReturn(Promise.resolve(null))

    v1.myLatestVideos()
      .then(() => {
        expect(v1.get).toHaveBeenCalledWith('/user/videos/latest')
        done()
      })
      .catch((err) => done(err))
  })
})

describe('v1.user', () => {
  it('should get a user', (done) => {
    v1.get = createSpy().andReturn(Promise.resolve(null))

    const name = 'jordan'

    v1.user(name)
      .then(() => {
        expect(v1.get).toHaveBeenCalledWith(`/users/${name}`)
        done()
      })
      .catch((err) => done(err))
  })
})

describe('v1.scheduledBroadcasts', () => {
  it('should get a list of scheduled broadcasts', (done) => {
    v1.get = createSpy().andReturn(Promise.resolve(null))

    v1.scheduledBroadcasts()
      .then(() => {
        expect(v1.get).toHaveBeenCalledWith('/scheduledbroadcast')
        done()
      })
      .catch((err) => done(err))
  })
})

describe('v1.scheduledBroadcast', () => {
  it('should get a scheduled broadcast by its ID', (done) => {
    v1.get = createSpy().andReturn(Promise.resolve(null))

    const id = 1

    v1.scheduledBroadcast(id)
      .then(() => {
        expect(v1.get).toHaveBeenCalledWith(`/scheduledbroadcast/${id}`)
        done()
      })
      .catch((err) => done(err))
  })
})

describe('v1.videos', () => {
  it('should get a list of videos', (done) => {
    v1.get = createSpy().andReturn(Promise.resolve(null))

    v1.videos()
      .then(() => {
        expect(v1.get).toHaveBeenCalledWith('/videos')
        done()
      })
      .catch((err) => done(err))
  })
})

describe('v1.video', () => {
  it('should get a video by its slug', (done) => {
    v1.get = createSpy().andReturn(Promise.resolve(null))

    const slug = 'myvideo'

    v1.video(slug)
      .then(() => {
        expect(v1.get).toHaveBeenCalledWith(`/videos/${slug}`)
        done()
      })
      .catch((err) => done(err))
  })
})
