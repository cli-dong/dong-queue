# dong-queue

[![NPM version](https://img.shields.io/npm/v/dong-queue.svg?style=flat-square)](https://npmjs.org/package/dong-queue)

> simple async queue runner

## Install

```bash
npm install -g dong-queue
```

## Usage

```bash
var queue = new Queue()

// use function
queue.use(function([arg1, arg2, ...]){})

// use functions
queue.use([function([arg1, arg2, ...]){}, ...])

// dynamically pass arguments to queue members
queue.run([arg1, arg2, ... ], [callback])
```
