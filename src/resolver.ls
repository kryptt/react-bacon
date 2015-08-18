Bacon = require \baconjs
React = require \react

module.exports = class Resolver extends React.Component
  _streams          : []
  get-child-context : -> resolver: @
  queue             : -> @_streams.push it.take(1)

Resolver::child-context-types =
  resolver: React.PropTypes.instance-of Resolver

Resolver::render = (component, props) ->
  resolver = React.create-element Resolver, (props ? {}) <<< children: component
  render   = ->
    content : React.render-to-string resolver
    data    : arguments
  # render once to populate _streams
  render!
  # once the queude streams resolve we re-render
  Bacon.when resolver._streams, render
