<template>
<div id="app">
<button @click="update">update</button>
    <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors'
        :getNodeDefaults='getNodeDefaults'></ejs-diagram>
</div>
</template>
<script>
import { DiagramComponent, PortVisibility } from '@syncfusion/ej2-vue-diagrams';

let port1 = {
style: {
    strokeColor: '#366F8C',
    fill: '#366F8C'
}
}
port1.shape = 'Circle';
port1.id = 'nodeportnew'
port1.visibility = PortVisibility.Visible
port1.id = 'port';
port1.offset = {
x: 1,
y: 1
};
let port2 = {
style: {
    strokeColor: '#366F8C',
    fill: '#366F8C'
}
};
port2.offset = {
x: 1,
y: 0.5
};
port2.id = 'port1';
port2.visibility = PortVisibility.Visible
port2.shape = 'Circle';
let port3 = {
style: {
    strokeColor: '#366F8C',
    fill: '#366F8C'
}
};
port3.offset = {
x: 0.5,
y: 1
};
port3.id = 'port3';
port3.visibility = PortVisibility.Visible
port3.shape = 'Circle';
let port4 = {

}
let nodes = [{
id: 'node',
width: 100,
height: 100,
offsetX: 100,
offsetY: 100,
ports: [port1]
},
{
id: 'node1',
width: 100,
height: 100,
offsetX: 300,
offsetY: 100,
ports: [port2, port3]
},
];
let connectors = {
id: "connector1",
sourcePoint: {
    x: 100,
    y: 100
},
type: 'Orthogonal',
targetPoint: {
    x: 200,
    y: 200
},
sourceID: 'node',
targetID: 'node1',
sourcePortID: 'port',
targetPortID: 'port1'
}
export default {
name: "App",
components: {
    "ejs-diagram": DiagramComponent
},
data() {
    return {
        width: "100%",
        height: "350px",
        nodes: nodes,
        connectors: [connectors],
        getNodeDefaults: (node) => {
            node.height = 100;
            node.width = 100;
            node.style.fill = '#6BA5D7';
            node.style.strokeColor = 'white';
            return node;
        },
    }
},
methods: {
  update: function () {
  let diagramInstance =  this.$refs.diagram.ej2Instances;
  diagramInstance.connectors[0].sourcePortID = 'port';
  diagramInstance.connectors[0].targetPortID = 'port3';
    }
}
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
