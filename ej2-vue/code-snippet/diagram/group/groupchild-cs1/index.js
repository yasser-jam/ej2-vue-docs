
import Vue from 'vue';
import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);
let node = {
    id: 'node1', width: 150, height: 100, offsetX: 100, offsetY: 100, annotations: [{ content: 'Node1' }]
};
let node2 = {
    id: 'node2', width: 80, height: 130, offsetX: 200, offsetY: 200, annotations: [{ content: 'Node2' }]
};
let group = {
    id: 'group1', children: ['node1', 'node2']
};
let node3 = {
    id: 'node3', width: 100, height: 100, offsetX: 300, offsetY: 300, annotations: [{ content: 'Node3' }]
};

new Vue({
el: '#app',
template: `
<div id="app">
    <button @click="addChild">addChild</button>
    <button @click="removeChild">removeChild</button>
    <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' ></ejs-diagram>
</div>
`,

name: 'app',
data() {
    return {
        width: "100%",
        height: "450px",
        nodes: [node,node2,node3,group],
    }
},
methods: {
    addChild: function () {
        let diagram = this.$refs.diagram.ej2Instances;
        diagram.addChildToGroup(group, 'node3');
    },
    removeChild: function () {
        let diagram = this.$refs.diagram.ej2Instances;
        diagram.removeChildFromGroup(group, 'node3');
    },

},

});