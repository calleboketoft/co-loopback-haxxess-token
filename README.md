#Authorization without authentication

`npm install --save git+https://git@github.com/calleboketoft/co-loopback-haxxess-token.js#v0.0.3`

Add to a boot script, for example `haxxessTokenInit.ts`

```javascript
module.exports = (server) => require('co-loopback-haxxess-token')(server)
```