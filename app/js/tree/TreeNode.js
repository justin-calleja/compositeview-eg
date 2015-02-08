/*global define*/

define([
  "backbone"
], function (Backbone) {
  "use strict";

  var NodeModel = Backbone.Model.extend({

    initialize: function() {
      var nodes = this.get("nodes");
      // Covert nodes to a NodeCollection
      this.set("nodes", new NodeCollection(nodes));
    },

    toJSON: function() {
      // Call parent"s toJSON method
      var data = Backbone.Model.prototype.toJSON.call(this);
      if (data.nodes && data.nodes.toJSON) {
        // If nodes is a collection, convert it to JSON
        data.nodes = data.nodes.toJSON();
      }
      return data;
    }

  });

  var NodeCollection = Backbone.Collection.extend({
    model: NodeModel
  });

  return {
    Model: NodeModel,
    Collection: NodeCollection
  };

});
