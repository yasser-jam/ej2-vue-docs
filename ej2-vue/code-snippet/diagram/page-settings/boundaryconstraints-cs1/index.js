
    import Vue from 'vue';
    import { DiagramPlugin,PageSettings } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let connectors = [{
        id: 'connector1',
        sourcePoint: {
            x: 300,
            y: 100
        },
        targetPoint: {
            x: 400,
            y: 100
        }
    }]
    let nodes = [
        {
            id: 'node1',
            width: 150,
            height: 100,
            offsetX: 100,
            offsetY: 100,
        },
        {
            id: 'node2',
            width: 80,
            height: 130,
            offsetX: 200,
            offsetY: 200,
        },
        {
            id: 'node3',
            width: 100,
            height: 75,
            offsetX: 300,
            offsetY: 350,
        }
    ]
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes'
        :connectors='connectors'
        :pageSettings='pageSettings' ></ejs-diagram>
    </div>
`,

        name: 'app'
        data() {
            return {
                width: "100%",
                height: "800px",
                nodes: nodes,
                connectors: connectors,
                pageSettings: {
                    // Sets the BoundaryConstraints to page
                    boundaryConstraints: 'Page',
                    background: {
                        color: 'grey'
                    },
                    width: 400,
                    height: 400,
                    showPageBreaks: true,
                }
            }
        }
    
});