import _ from 'underscore';

export default function copyProps(Element, props){
  const result = {};
  for(let key of _.keys(Element.propTypes)){
    if(!_.isUndefined(props[key])){
      result[key] = props[key];
    }
  }
  return result;
};
