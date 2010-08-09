/*!
 * Canvas Context2D Wrapper <http://github.com/millermedeiros/CanvasContext2DWrapper>
 * Released under WTFPL <http://sam.zoy.org/wtfpl/>.
 * @author Miller Medeiros <http://millermedeiros.com>
 * @version 1.0 (2010/08/08)
 */

 /**
  * @param {Object} namespace	Namespace of the Context2DWrapper.
  */
(function(namespace){

	var 
		/** @private {array} Canvas Context2D methods */
		_context2DMethods = 'arc arcTo beginPath bezierCurveTo clearRect clip closePath createImageData createLinearGradient createRadialGradient createPattern drawFocusRing drawImage fill fillRect fillText getImageData isPointInPath lineTo measureText moveTo putImageData quadraticCurveTo rect restore rotate save scale setTransform stroke strokeRect strokeText transform translate'.split(' '),
		
		/** @private {array} Canvas Context2D properties */
		_context2DProperties = 'canvas fillStyle font globalAlpha globalCompositeOperation lineCap lineJoin lineWidth miterLimit shadowOffsetX shadowOffsetY shadowBlur shadowColor strokeStyle textAlign textBaseline'.split(' ');
	
	/**
	 * Wrap function to enable method chaining.
	 * @param {Function} fn	Function to be modified.
	 * @param {Object} scope	Scope where function will be called.
	 * @param {Object} chainReturn	Object returned to enable chaining.
	 * @return {Function} Chainable function.
	 * @private
	 */
	function chainMethod(fn, scope, chainReturn){
		return function(){
			return fn.apply(scope, arguments) || chainReturn;
		};
	}
	
	/**
	 * Convert properties into getter/setter methods enabling chaining.
	 * @param {String} propName	Property name.
	 * @param {Object} scope	Object that contain original property.
	 * @param {Object} chainReturn	Object returned to enable chaining.
	 * @return {Function} Chainable getter/setter for properties.
	 * @private
	 */
	function chainProperty(propName, scope, chainReturn){
		return function(value){
			if(typeof value === 'undefined'){
				return scope[propName];
			}else{
				scope[propName] = value;
				return chainReturn;
			}
		};
	}
	
	/**
	 * @class Canvas Context2D Wrapper.
	 * @param {CanvasRenderingContext2D} target	Canvas Context2D that will be wrapped.
	 */
	namespace.Context2DWrapper = function(target){
		
		var n = _context2DMethods.length,
			curProp;
		
		/** 
		 * Reference to Canvas Rendering Context 2D.
		 * @type CanvasRenderingContext2D 
		 */
		this.context = target;
		
		//wrap methods
		while(n--){
			curProp = _context2DMethods[n];
			this[curProp] = chainMethod(target[curProp], target, this);
		}
		
		//convert properties into methods (getter/setter)
		n = _context2DProperties.length;
		while(n--){
			curProp = _context2DProperties[n];
			this[curProp] = chainProperty(curProp, target, this);
		}
	};
	
}(this));
