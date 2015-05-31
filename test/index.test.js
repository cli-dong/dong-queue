'use strict'

/*globals describe,it,beforeEach,afterEach*/

var expect = require('expect.js')
var Queue = require('../index.js')

describe('normal', function() {

  var queue
  var i
  var a

  beforeEach(function() {
    queue = new Queue()
    i = 0
    a = {}
  })

  it('with callback', function() {
    queue.use(function(next) {
      i += 1
      next()
    })

    queue.run(function() {
      expect(i).to.be(1)

      i += 2
    })

    expect(i).to.be(3)
  })

  it('without callback', function() {
    queue.use(function(next) {
      i += 1
      next()
    })

    queue.run()

    expect(i).to.be(1)
  })

  it('with params', function() {
    queue.use(function(a, next) {
      a.index = i += 1
      next()
    })

    queue.run(a)

    expect(a.index).to.be(1)
  })

  it('does not go through', function() {
    queue.use(function(next) {
      i += 1
      next()
    })

    queue.use(function(/*next*/) {
      i += 2
      // next()
    })

    queue.use(function(next) {
      // this would not be executed
      i += 4
      next()
    })

    queue.run(function() {
      // this would not be executed
      expect().fail('this would not be executed')
    })

    expect(i).to.be(3)
  })

  afterEach(function() {
    queue = null
  })

})
