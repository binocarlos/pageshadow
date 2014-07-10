var Emitter = require('emitter')
var classes = require('classes')

module.exports = PageShadow;

var defaults = {}

function PageShadow (book, opts) {
  if (!(this instanceof PageShadow)) return new PageShadow(book, opts);
  opts = opts || {}
  Object.keys(defaults || {}).forEach(function(key){
    if(!opts[key]){
      opts[key] = defaults[key]
    }
  })
  this._book = book
  this._options = opts
  this.setupEvents()
}

Emitter(PageShadow.prototype)

PageShadow.prototype.setupEvents = function () {
  this._book.on('render:leaf', this.buildShadow.bind(this))
}

PageShadow.prototype.buildShadow = function (index, leafElem, side) {
  var shadow = document.createElement('div')
  classes(shadow).add('pageshadow-shadow')
  classes(shadow).add('pageshadow-' + side)
  leafElem.appendChild(shadow)
  this.emit('render', shadow, index, side)
}