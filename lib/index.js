/*
 * biojs-vis-dotplot
 * https://github.com/milindl/biojs-vis-dotplot
 *
 * Copyright (c) 2016 milindl
 * Licensed under the Apache-2.0 license.
 */

/**
@class biojsvisdotplot
 */


var  biojsvisdotplot;
module.exports = biojsvisdotplot = function(opts){
  this.el = opts.el;
  this.el.textContent = biojsvisdotplot.hello(opts.text);
};

/**
 * Private Methods
 */

/*
 * Public Methods
 */

/**
 * Method responsible to say Hello
 *
 * @example
 *
 *     biojsvisdotplot.hello('biojs');
 *
 * @method hello
 * @param {String} name Name of a person
 * @return {String} Returns hello name
 */


biojsvisdotplot.hello = function (name) {

  return 'hello ' + name;
};

