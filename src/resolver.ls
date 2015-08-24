React = require \react

module.exports = Resolver = React.create-class do
  child-context-types :
    resolver : React.PropTypes.object.is-required
  prop-types :
    queue-stream : React.PropTypes.func.is-required

  get-child-context : -> resolver: @
  queue             : (observ, timeout = 500, initial)->
    prop =
     if observ.to-property? then observ .to-property initial
     else observ
    @props.queue-stream <| prop.sample timeout .take 1
  render            : -> React.create-element @props.child, @props
