
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [{
        id: 'node1',
        // Position of the node
        offsetX: 450,
        offsetY: 250,
        // Size of the node
        width: 100,
        height: 100,
        // Sets the multiple annotation for the node
        annotations: [{
                content: 'Left',
                offset: {
                    x: 0.12,
                    y: 0.1
                }
            },
            {
                content: 'Center',
                offset: {
                    x: 0.5,
                    y: 0.5
                }
            },
            {
                content: 'Right',
                offset: {
                    x: 0.82,
                    y: 0.9
                }
            }
        ]
    }]

    let connectors = [{
        id: 'connector',
        type: 'Orthogonal',
        sourcePoint: { x: 200, y: 200 },
        targetPoint: { x: 300, y: 300 },
        // Sets the multiple annotation for the node
        annotations: [
          {
            content: 'Top',
            offset: 0.2,
          },
          {
            content: 'Center',
            offset: 0.6,
          },
          {
            content: 'Bottom',
            offset: 0.8,
          },
        ],
      }]
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :connectors='connectors' ></ejs-diagram>
    </div>
`,

        name: 'app'
        data() {
            return {
                width: "100%",
                height: "350px",
                nodes: nodes,
                connectors: connectors
            }
        }
    
});