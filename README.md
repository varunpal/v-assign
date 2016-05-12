# v-assign
Assign properties of multiple [target] objects to a source object.

## Install
```node
npm install v-assign
```

### Example

```javascript
var assign = require('v-assign');

var object = {
  a: 10,
  b: "hello"
};

assign(object, {a: 1, z: 100}, {y: 20}); // object = {a: 1, b: "Hello", z: 100, y: 20}

// Ignores undefined / null / falsy / non-object arguments.
```