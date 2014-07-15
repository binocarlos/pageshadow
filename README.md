pageshadow
==========

page shadow for [pageturner](https://github.com/binocarlos/pageturner) book pages

## installation

```
$ component install binocarlos/pageshadow
```

## example

```js
var PageTurner = require('pageturner')
var PageShadow = require('shadow')

var pages = [{
	title:'Page 1'	
},{
	title:'Page 2'
},{
	title:'Page 3'
}]

var book = PageTurner()
var shadows = PageShadow(book)

shadows.on('render', function(shadow, index){

})

book.loadData(pages)
book.appendTo(document.querySelector('#container'))
```

## api

#### `var shadows = PageShadow(book, opts)`

Create a new shadow module - pass a new [pageturner](https://github.com/binocarlos/pageturner) book to the constructor.

## events

#### `shadows.on('render', function(elem, index){})`

A shadow element has been rendered to a page

## css

The DOM structure for the page shadows:

```html
<div class="pageshadow-container">
	<div class="pageshadow-left"></div>
	<div class="pageshadow-right"></div>
</div>
```

## licence
MIT