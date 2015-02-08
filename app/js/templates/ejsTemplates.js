define(function(){

this["JST"] = this["JST"] || {};

this["JST"]["app/ejs/tree/treeViewComposite.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if(nodes.length > 0) { ;
__p += '\n    ' +
((__t = ( nodeName )) == null ? '' : __t) +
'\n    <ul></ul>\n';
 } else { ;
__p += '\n    ' +
((__t = ( nodeName )) == null ? '' : __t) +
'\n';
 } ;
__p += '\n';

}
return __p
};

  return this["JST"];

});