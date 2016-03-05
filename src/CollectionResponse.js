import Promise from 'bluebird'
import co from 'co'
import _ from 'lodash'

const responses = [
  { count: 10, next: 1, previous: null, results: ['a', 'b'] },
  { count: 10, next: 2, previous: 0, results: ['c', 'd'] },
  { count: 10, next: 3, previous: 1, results: ['e', 'f'] },
  { count: 10, next: 4, previous: 2, results: ['g', 'h'] },
  { count: 10, next: null, previous: 3, results: ['i', 'j'] }
]

class CollectionResponse {

  constructor ({ next, previous, results }) {
    this.previous = previous
    this.next = next
    this.results = results
  }

  // Get the next item
  next () {
    if (this.hasNext()) {
      return Promise.resolve(
        new CollectionResponse(responses[this.next])
      )
    }

    return null
  }

  hasNext () {
    return this.next !== null
  }

  // Get the previous collection
  previous () {
    if (this.hasPrevious()) {
      return Promise.resolve(
        new CollectionResponse(responses[this.previous])
      )
    }

    return null
  }

  hasPrevious () {
    return this.previous !== null
  }

  all () {
    let all = []
    let self = this
    let prevCursor = self
    let nextCursor = self

    return co(function *() {
      // Get all previous
      while (prevCursor.hasPrevious()) {
        prevCursor = yield prevCursor.previous()
        all.push(prevCursor.items)
      }
      all = all.reverse()

      all.push(self.items)

      // Get all next
      while (nextCursor.hasNext()) {
        nextCursor = yield nextCursor.next()
        all.push(nextCursor.items)
      }

      return Promise.all(_.flatten(all))
    })
    .catch((err) => console.error(err))
  }
}

new CollectionResponse(responses[2])
  .all()
  .then((a) => console.log(a))
