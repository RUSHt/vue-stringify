var Stringify = function(msg) { return JSON.stringify(msg,null,2) }
    Stringify.parse = function(obj) { return JSON.parse(JSON.stringify(obj,null,2)) }

module.exports = Stringify;
    