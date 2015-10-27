window.__ = domSelect = (function(queryString) {


    var QueryParser = (function() {

        var queryDelimeter = " ", // queries should be space separated

            /**
            * This method selects DOMs by class name
            */
            selectDomsByClassName = (function(doms, className){
                var index, tempDomsArray;
                if(doms == null) {
                    return document.getElementsByClassName(className);
                } else {
                    for(index=0; index<doms.length; index++) {
                        if(doms[index].className.indexOf(className)!=-1) {
                            tempDomsArray.push(doms[index]);
                        }
                    }
                    return tempDomsArray;
                }
            }),

            /**
            * This method selects DOMs by Id
            */
            selectDomById = (function(doms, id){
                var index, tempDomsArray;
                if(doms == null) {
                    return document.getElementById(id);
                } else {
                    for(index=0; index<doms.length; index++) {
                        if(doms[index].id==id) {
                            return doms[index];
                        }
                    }
                }
            }),

            /**
            * This method selects DOMs by tag name
            */
            selectDomsByTagName = (function(doms, query){
               var index, tempDomsArray;
                if(doms == null) {
                    return document.getElementsByTagName(query);
                } else {
                    for(index=0; index<doms.length; index++) {
                        if(doms[index].tagName.toLowerCase().indexOf(query.toLowerCase())!=-1) {
                            tempDomsArray.push(doms[index]);
                        }   
                    }
                    return tempDomsArray;
                } 
            }),
            getDomFilteredByQuery = (function(doms, query) {
                if(query[0]=="." || query[0]=="#" || query[0]=="_") {
                    switch (query[0]) {
                        case ".":
                            doms = selectDomsByClassName(doms, query.substr(1, (query.length-1)));
                        break;
                        case "#":
                            doms = selectDomById(doms, query.substr(1, (query.length-1)));
                        break;
                        case "_":
                        break;
                    }
                } else {
                    doms = selectDomsByTagName(doms, query);
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
