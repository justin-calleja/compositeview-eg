/*global define*/

define([
  "marionette",
  "ejsTemplates",
  "tree/TreeCompositeView"
], function (Marionette, JST, TreeCompositeView) {
  "use strict";

  var TreeCollectionView = Marionette.CollectionView.extend({
      tagName: "ul",
      childView: TreeCompositeView
  });

  return TreeCollectionView;

});
