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

queue.use(function(){})

queue.use([function(){}, ...])

queue.run(callback)
```
