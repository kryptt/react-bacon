var React, Resolver;
React = require('react');
module.exports = Resolver = React.createClass({
  childContextTypes: {
    resolver: React.PropTypes.object.isRequired
  },
  propTypes: {
    queueStream: React.PropTypes.func.isRequired
  },
  getChildContext: function(){
    return {
      resolver: this
    };
  },
  queue: function(observ, timeout, initial){
    var prop;
    timeout == null && (timeout = 500);
    prop = observ.toProperty != null ? observ.toProperty(initial) : observ;
    return this.props.queueStream(prop.sample(timeout).take(1));
  },
  render: function(){
    return React.createElement(this.props.child, this.props);
  }
});
//# sourceMappingURL=maps/resolver.js.map