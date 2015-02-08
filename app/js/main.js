/*global require*/
"use strict";

require.config({
  paths: {
    jquery: "../lib/jquery/dist/jquery",
    backbone: "../lib/backbone/backbone",
    marionette: "../lib/marionette/lib/core/backbone.marionette",
    "backbone.wreqr": "../lib/backbone.wreqr/lib/backbone.wreqr",
    "backbone.babysitter": "../lib/backbone.babysitter/lib/backbone.babysitter",
    underscore: "../lib/lodash/lodash",
    ejsTemplates: "./templates/ejsTemplates"
  }
});

require([
  "tree/TreeNode",
  "tree/nodeData",
  "tree/TreeCollectionView"
], function (TreeNode, nodeData, TreeCollectionView) {

  var nodes = new TreeNode.Collection(nodeData);
  var tree = new TreeCollectionView({
    collection: nodes
  });
  tree.render();
  $("[data-tree-container]").append(tree.el);

});
