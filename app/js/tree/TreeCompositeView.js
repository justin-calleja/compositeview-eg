/*global define*/

define([
  "marionette",
  "ejsTemplates"
], function (Marionette, JST) {
  "use strict";

  var CompositeView = Marionette.CompositeView.extend({

    template: JST["app/ejs/tree/treeViewComposite.ejs"],

    tagName: "li",

    // specifies a selector for the element we want the
    // child elements placed into
    childViewContainer: "ul",

    initialize: function() {
      // grab the child collection from the parent model
      // so that we can render the collection as children
      // of this parent node
      this.collection = this.model.get("nodes");
    }

  });

  return CompositeView;

});
