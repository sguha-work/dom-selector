__ = (function(query) {
    console.log(query);
});
__.construct = (function(signature){
    console.log("construct called with "+signature);
    signature = __;
    return signature;
})
