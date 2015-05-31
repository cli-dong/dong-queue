# dong-queue

[![NPM version](https://img.shields.io/npm/v/dong-queue.svg?style=flat-square)](https://npmjs.org/package/dong-queue)
[![Build Status](https://drone.io/github.com/crossjs/dong-queue/status.png)](https://drone.io/github.com/crossjs/dong-queue/latest)

> simple async queue runner

## Install

```bash
npm install --save dong-queue
```

## Usage

```js
var queue = new Queue()

// use function
queue.use(function([arg1, arg2, ...], next){
  // do some (a)sync job, then
  next()
})

// use functions
queue.use([function([arg1, arg2, ...], next){
  // do some (a)sync job, then
  next()
}, ...])

// dynamically pass arguments to queue members
queue.run([arg1, arg2, ... ], [function([arg1, arg2, ... ]) {

}])
```
