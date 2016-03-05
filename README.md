[![Travis](https://img.shields.io/travis/rust-lang/rust.svg)](https://travis-ci.org/JordanAdams/js-livecodingtv-api)
[![Code Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Documentation](https://doc.esdoc.org/github.com/JordanAdams/js-livecodingtv-api/badge.svg)](https://doc.esdoc.org/github.com/JordanAdams/js-livecodingtv-api)

# Livecoding.tv JS API Wrapper

A simple wrapper for the Livecoding.tv API.

Currently this module does not concern itself with retrieving access tokens as this can differ based on your platform. Instead it simply takes an already obtained token and provides a clean interface for making API calls to Livecoding.tv.

## Installation

    $ npm install livecoding

## Example

```js
import Livecoding from 'livecoding'

const token = 'abc123'

new Livecoding(token).v1.livestreamsOnAir()
  .then(livestreams => {
    console.log(livestreams)
  })
  .catch(err => {
    console.error(err)
  })
```

## Documentation

Docs for this wrapper and its methods can be found [here](https://doc.esdoc.org/github.com/JordanAdams/js-livecodingtv-api/)

Additionally, you should check the [Livecoding.tv API docs](https://www.livecoding.tv/developer/documentation) for more info on API responses

## Todo

- [ ] Support Authorization Code authentication
- [ ] Add a Response type to support pagination (next, previous, all)
- [ ] Integration tests with real API calls
