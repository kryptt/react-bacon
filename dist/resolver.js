var Bacon, React, Resolver;
Bacon = require('baconjs');
React = require('react');
module.exports = Resolver = (function(superclass){
  var prototype = extend$((import$(Resolver, superclass).displayName = 'Resolver', Resolver), superclass).prototype, constructor = Resolver;
  prototype._streams = [];
  prototype.getChildContext = function(){
    return {
      resolver: this
    };
  };
  prototype.queue = function(it){
    return this._streams.push(it.take(1));
  };
  function Resolver(){
    Resolver.superclass.apply(this, arguments);
  }
  return Resolver;
}(React.Component));
Resolver.prototype.childContextTypes = {
  resolver: React.PropTypes.instanceOf(Resolver)
};
Resolver.prototype.render = function(component, props){
  var resolver, ref$, render;
  resolver = React.createElement(Resolver, (ref$ = props != null
    ? props
    : {}, ref$.children = component, ref$));
  render = function(){
    return {
      content: React.renderToString(resolver),
      data: arguments
    };
  };
  render();
  return Bacon.when(resolver._streams, render);
};
function extend$(sub, sup){
  function fun(){} fun.prototype = (sub.superclass = sup).prototype;
  (sub.prototype = new fun).constructor = sub;
  if (typeof sup.extended == 'function') sup.extended(sub);
  return sub;
}
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}
//# sourceMappingURL=maps/resolver.js.map