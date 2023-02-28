var _jQuery = function(elements){
	this.length = elements.length;
	for(var i = 0; i < this.length; i++){
		this[i] = elements[i];
	}
}

var jQuery = function(param){
	if(typeof(param) === 'function'){
		window.addEventListener('load', param);
		return;
	}
	
	var elements;
	
	if(typeof(param) === 'string'){
		document.querySelectorAll(param);
	}
	
	return new _jQuery(elements || []);
}



var $ = jQuery;

