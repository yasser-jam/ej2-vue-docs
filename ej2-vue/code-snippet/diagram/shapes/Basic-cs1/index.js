
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [{
        // Position of the node
        offsetX: 250,
        offsetY: 250,
        // Size of the node
        width: 100,
        height: 100,
        //sets the type of the shape as Basic
        shape: {
            type: 'Basic',
            shape: 'Rectangle',
            cornerRadius: 10
        },
}]

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' ></ejs-diagram>
    </div>
`,

    name: 'app'
    data() {
        return {
            width: "100%",
            height: "500px",
            nodes: nodes,
        }
    }

});