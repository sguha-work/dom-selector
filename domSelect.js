window.__ = domSelect = (function(queryString) {


    var QueryParser = (function() {

        var queryDelimeter = " ", // queries should be space separated
            getDomFileteredByQuery = (function(doms, query) {

            }); 

        this.splitQueryStringToProduceQueryArray = (function(queryString) {
            return queryString.split(queryDelimeter);
        });

        this.executeQueries = (function(queryArray) {
            var index, doms;
            for(index in queryArray) {
                getDomFileteredByQuery(doms, queryArray[index]);
            }
        });

    });


    var qp = new QueryParser(),
        queryArray = qp.splitQueryStringToProduceQueryArray(queryString),
        doms = qp.executeQueries(queryArray);
    if(typeof doms != "undefined") {
        return ((doms.length>1)?doms:(doms.length?doms[0]:0));
    } else {
        return false;
    }
});



/**
 * This method should be called if __ is being used 
 * for another library or function
 */
domSelect.construct = (function() {
    return domSelect;
});