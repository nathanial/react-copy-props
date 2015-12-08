var _ = require('underscore');

module.exports = function copyProps(Element, props){
  var result = {};
  _.each(_.keys(Element.propTypes), function(key){
    if(!_.isUndefined(props[key])){
      result[key] = props[key];
    }
  });
  return result;
};
