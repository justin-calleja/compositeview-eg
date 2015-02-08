/*global define*/

define(function () {
  "use strict";
 
  return [
    {
      nodeName: "1",
      nodes: [
        {
          nodeName: "1.1",
          nodes: [
            { nodeName: "1.1.1" },
            { nodeName: "1.1.2" },
            { nodeName: "1.1.3" }
          ]
        },
        {
          nodeName: "1.2",
          nodes: [
            { nodeName: "1.2.1" },
            {
              nodeName: "1.2.2",
              nodes: [
                { nodeName: "1.2.2.1" },
                { nodeName: "1.2.2.2" },
                { nodeName: "1.2.2.3" }
              ]
            },
            { nodeName: "1.2.3" }
          ]
        }
      ]
    },
    {
      nodeName: "2",
      nodes: [
        {
          nodeName: "2.1",
          nodes: [
            { nodeName: "2.1.1" },
            { nodeName: "2.1.2" },
            { nodeName: "2.1.3" }
          ]
        },
        {
          nodeName: "2.2",
          nodes: [
            { nodeName: "2.2.1" },
            { nodeName: "2.2.2" },
            { nodeName: "2.2.3" }
          ]
        }
      ]
    }
  ];

});
