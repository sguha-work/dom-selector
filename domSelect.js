window.__ = domSelect= (function(queryString) {
    
});

var QueryParser = (function() {
	var queryDelimeter = " ";// queries should be space separated
	this.splitQueryStringToProduceQueryArray = (function(queryString) {
		return queryString.split(queryDelimeter);
	});
});

/**
* This method should be called if __ is being used 
* for another library or function
*/
domSelect.construct = (function(){
    return domSelect;
});
