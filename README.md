# Livecoding.tv JS API Wrapper

A simple wrapper for the Livecoding.tv API.

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
