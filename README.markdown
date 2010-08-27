# Canvas Context 2D Wrapper #

Wrapper for HTML5 Canvas Context 2D properties and methods, enabling chaining.

It's intended to be simple, small and not add new functionalities besides method chaining, it doesn't overwrite the native prototypes/objects and can be used interchangeably with native Context2D methods/properties, works just as a wrapper to native calls.

## Why? ##

 - Sometimes method chaining can be a good solution for code brevity and a lot of developers got used to it because of popular JavaScript frameworks like jQuery and prototype.
 - Existing solutions are too big or more complex than what I needed.
 - No need to learn a new API and also small file size (~1KB without gzip).

## How to Use ##

Include `Context2DWrapper-X.X.min.js` on your HTML5 document:

	<script src="Context2DWrapper-X.X.min.js"></script>

Get the reference of the CanvasRenderingContext2D that you want to wrap and create a new Context2DWrapper:

	var canvas = document.getElementById('my-canvas');
	var context = canvas.getContext('2d');
	var contextWrapper = new Context2DWrapper(context);
   
You are ready to go! Start chaining methods and properties!

	contextWrapper.fillStyle('#F00').fillRect(25,25,100,100).fillStyle('#0F0').fillRect(50,50,100,100);

### Getters/Setters ###
	
If property value is `undefined` gets value:

	var currentFill = contextWrapper.fillStyle(); //gets current fillStyle

If property value if not `undefined` sets value:

	contextWrapper.fillStyle('#F00'); //sets fill color to red

### Native Context 2D ###

You can also get a reference to the wrapped `Context 2D` object, and call methods/properties directly on it (without chaining):

	var nativeContext = contextWrapper.context;
	nativeContext.fillStyle = '#0F0';
   
## API / Documentation ##

Methods and properties names are the same as native `Context 2D` methods/properties. The only new property is the `context` property that stores a reference to the native `Context2D` object.

If method doesn't return any value it will return a reference to the `Context2DWrapper` enabling chaining.

### Constructor ###
   
	/**
	* Creates a new Context2D wrapper.
	* @param {CanvasRenderingContext2D} target    Canvas Context2D that will be wrapped.
	*/
	new Context2DWrapper(target);

### Methods ###

Works the same way as native Context2D methods.

	arc, arcTo, beginPath, bezierCurveTo, clearRect, clip, closePath, createImageData, createLinearGradient, createRadialGradient, createPattern, drawFocusRing, drawImage, fill, fillRect, fillText, getImageData, isPointInPath, lineTo, measureText, moveTo, putImageData, quadraticCurveTo, rect, restore, rotate, save, scale, setTransform, stroke, strokeRect, strokeText, transform, translate.

### Getters/Setters ###

All properties are converted into getters/setters.

	canvas, fillStyle, font, globalAlpha, globalCompositeOperation, lineCap, lineJoin, lineWidth, miterLimit, shadowOffsetX, shadowOffsetY, shadowBlur, shadowColor, strokeStyle, textAlign, textBaseline
   
### Properties ###

	context

For more details about methods/properties values/parameters check the [W3C documentation](http://dev.w3.org/html5/canvas-api/canvas-2d-api.html#the-2d-drawing-context) or search the internet for canvas tutorials.

## Important ##

 - This code is released under the [WTFPL](http://sam.zoy.org/wtfpl/).
 - **I'm not a big fan of method chaining** since code tends to be become "more cryptic" but sometimes it makes sense to use, **use it with moderation.**
 - If you need extra functionalities check [Canto.js](http://www.davidflanagan.com/2010/07/cantojs-an-impr.html), it has some good ones.
 - I don't give any support on how to use these files.
   
&copy; [Miller Medeiros](http://www.millermedeiros.com)