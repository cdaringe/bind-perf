var _ = require('lodash')
var Benchmark = require('benchmark')

var suite = new Benchmark.Suite()
var createFunction = () => () => {}
// add tests
suite
  .add('_.bind', function () {
    _.bind(createFunction(), null)
  })
  .add('<native>.bind', function () {
    createFunction().bind(null)
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  // run async
  .run({ async: true })
