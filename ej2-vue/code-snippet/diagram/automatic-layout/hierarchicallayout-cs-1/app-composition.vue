<template>
    <div id="app">
      <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors'
        :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults' :layout='layout'></ejs-diagram>
    </div>
  </template>
  
  <script setup>
  import { provide } from "vue";
  import { DiagramComponent as EjsDiagram, HierarchicalTree } from '@syncfusion/ej2-vue-diagrams';
  
  //Initialize nodes
  let nodes = [
    {
      id: 'Steve-Ceo',
    },
    {
      id: 'Kevin-Manager',
    },
    {
      id: 'Peter-Manager',
    },
    {
      id: 'John-Manager',
    },
    {
      id: 'Mary-CSE',
    },
    {
      id: 'Jim-CSE',
    },
    {
      id: 'Martin-CSE',
    },
  ];
  
  //Initialize connectors
  let connectors = [
    {
      id: 'Steve-Ceo_Kevin-Manager',
      sourceID: 'Steve-Ceo',
      targetID: 'Kevin-Manager',
    },
    {
      id: 'Steve-Ceo_Peter-Manager',
      sourceID: 'Steve-Ceo',
      targetID: 'Peter-Manager',
    },
    {
      id: 'Peter-Manager_John-Manager',
      sourceID: 'Peter-Manager',
      targetID: 'John-Manager',
    },
    {
      id: 'Peter-Manager_Mary-CSE',
      sourceID: 'Peter-Manager',
      targetID: 'Mary-CSE',
    },
    {
      id: 'Kevin-Manager_Jim-CSE',
      sourceID: 'Kevin-Manager',
      targetID: 'Jim-CSE',
    },
    {
      id: 'Kevin-Manager_Martin-CSE',
      sourceID: 'Kevin-Manager',
      targetID: 'Martin-CSE',
    },
  ];
  
  const width = "1000px";
  const height = "590px";
  
  //Uses layout to auto-arrange nodes on the Diagram page
  const layout = {
    //Sets layout type
    type: 'HierarchicalTree',
  }
  
  //Sets the default properties for nodes and connectors
  const getNodeDefaults = (node) => {
    node.annotations = [{ content: node.id }];
    node.width = 100; node.height = 40;
    return node;
  }
  const getConnectorDefaults = (connector) => {
    connector.type = 'Orthogonal';
    return connector;
  }
  
  provide('diagram', [HierarchicalTree]);
  
  </script>
  
  <style>
  @import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
  </style>