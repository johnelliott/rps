var test = require('tape')
var rps = require('./index.js')

test('rps module', function(t) {
  t.plan(10)

  t.equal(rps('rock', 'scissors'), 'win', 'rock beats scissors')
  t.equal(rps('scissors', 'paper'), 'win', 'scissors beats paper')
  t.equal(rps('paper', 'rock'), 'win', 'paper beats rock')

  t.equal(rps('paper', 'scissors'), 'lose', 'paper loses to scissors')
  t.equal(rps('scissors', 'rock'), 'lose', 'scissors loses to rock')
  t.equal(rps('rock', 'paper'), 'lose', 'rock loses to paper')

  t.equal(rps('rock', 'rock'), 'tie', 'rock ties rock')
  t.equal(rps('scissors', 'scissors'), 'tie', 'scissors ties scissors')
  t.equal(rps('paper', 'paper'), 'tie', 'paper ties paper')

  t.throws(function() { rps('beep', 'boop') }, /choices/, 'throws on bad input')
})
