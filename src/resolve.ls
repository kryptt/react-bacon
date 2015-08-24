Bacon    = require \baconjs
React    = require \react
Resolver = require \./resolver

module.exports = (child, props = {}) ->
  streams = []
  props.child = child
  props.queue-stream = -> streams.push it

  resolver = React.create-element Resolver, props

  render = ->
    content : React.render-to-string resolver
    data    : arguments

  # render once to populate _streams
  render!

  # once the queude streams resolve we re-render
  streams.push Bacon.once 0 if streams.length is 0
  Bacon.when resolver._streams, render
