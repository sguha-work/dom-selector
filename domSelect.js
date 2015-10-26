window.__ = domSelect = (function(queryString) {


    var QueryParser = (function() {

        var queryDelimeter = " ", // queries should be space separated
            selectDomsByClassName = (function(doms, className){
                if(doms == null) {console.log(document.getElementsByClassName(className));
                    return document.getElementsByClassName(className);
                } else {

                }
            }),
            getDomFilteredByQuery = (function(doms, query) {
                if(query[0]=="." || query[0]=="#" || query[0]=="_") {
                    switch (query[0]) {
                        case ".":
                            doms = selectDomsByClassName(doms, query.substr(1, (query.length-1)));
                        break;
                        case "#":
                        break;
                        case "_":
                        break;
                    }
                } else {
                    if(doms == null) {
                        doms = document.getElementsByTagName("*");
                    }
                }
                return doms;
            }); 

        this.splitQueryStringToProduceQueryArray = (function(queryString) {
            return queryString.split(queryDelimeter);
        });

        this.executeQueries = (function(queryArray) {
            var index, doms=null;
            for(index in queryArray) {
                doms = getDomFilteredByQuery(doms, queryArray[index]);
            }
            return doms;
        });

    });


    var qp = new QueryParser(),
        queryArray = qp.splitQueryStringToProduceQueryArray(queryString),
        doms = qp.executeQueries(queryArray);
    if(typeof doms != "undefined") {
        //return ((doms.length>1)?doms:(doms.length?doms[0]:0));
        return doms;
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
