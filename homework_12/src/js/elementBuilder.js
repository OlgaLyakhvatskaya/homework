import $ from 'jquery';

export default (tag = 'div', content = '', className = 'box') => {
  
    const element = $(`<${tag}>`).addClass(className).html(content)
 
  return element;
};
