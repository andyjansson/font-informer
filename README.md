# Font detective [![Build Status][ci-img]][ci]

Node.js font identifier

[ci-img]:  https://travis-ci.org/andyjansson/font-detective.svg
[ci]:      https://travis-ci.org/andyjansson/font-detective

![font detective](https://raw.github.com/andyjansson/font-detective/master/font-detective.gif)

## Installation

```js
npm install font-detective
```

## Usage 

```js
var detective = require('font-detective');

detective('font.ttf').then(function (result) {
	console.log(result);
});
```