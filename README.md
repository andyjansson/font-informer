# font-informer [![Build Status][ci-img]][ci]

Node.js font identifier

[ci-img]:  https://travis-ci.org/andyjansson/font-informer.svg
[ci]:      https://travis-ci.org/andyjansson/font-informer

## Installation

```js
npm install font-informer
```

## Usage 

```js
var informer = require('font-informer');

informer('font.ttf').then(function (result) {
	console.log(result);
});
```

```json
{ 
	"type": "ttf",
	"name": "SourceSansPro-Regular",
	"weight": 400,
	"style": "oblique"
}
```