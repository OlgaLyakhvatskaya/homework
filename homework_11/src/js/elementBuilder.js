const $ = require('jquery');

module.exports = (tag = 'div', content = '', className = 'box') => {

    const element = $(`<${tag}>`).addClass(className).html(content)
 
  return element;
};
