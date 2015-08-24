var Bacon, React, Resolver;
Bacon = require('baconjs');
React = require('react');
Resolver = require('./resolver');
module.exports = function(child, props){
  var streams, resolver, render;
  props == null && (props = {});
  streams = [];
  props.child = child;
  props.queueStream = function(it){
    return streams.push(it);
  };
  resolver = React.createElement(Resolver, props);
  render = function(){
    return {
      content: React.renderToString(resolver),
      data: arguments
    };
  };
  render();
  if (streams.length === 0) {
    streams.push(Bacon.once(0));
  }
  return Bacon.when(resolver._streams, render);
};
//# sourceMappingURL=maps/resolve.js.map