
import Vue from 'vue';
import { Diagram,DiagramPlugin, ConnectorConstraints ,ConnectorEditing} from '@syncfusion/ej2-vue-diagrams';
Diagram.Inject(ConnectorEditing);
Vue.use(DiagramPlugin);
let connectors = [
    {
      id: 'connector1',
      type: 'Orthogonal',
      // Defines multile segemnts for the connectors
      segments: [
        {
          type: 'Orthogonal',
          direction: 'Bottom',
          length: 150,
        },
        {
          type: 'Orthogonal',
          direction: 'Right',
          length: 150,
        },
        {
          type: 'Orthogonal',
          direction: 'Top',
          length: 100,
        },
        {
          type: 'Orthogonal',
          direction: 'Left',
          length: 100,
        },
      ],
      sourcePoint: {
        x: 300,
        y: 100,
      },
      targetPoint: {
        x: 350,
        y: 150,
      },
      constraints:
        ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb,
    }, {
      id: 'connector2',
      type: 'Bezier',
      constraints:
        ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb,
      segments: [
        { point: { x: 150, y: 150 }, type: 'Bezier' },
        { point: { x: 250, y: 250 }, type: 'Bezier' },
      ],
      sourcePoint: { x: 100, y: 100 },
      targetPoint: { x: 300, y: 300 },
    }, {
      id: 'connector3',
      type: 'Straight',
      constraints:
        ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb,
      segments: [
        { point: { x: 500, y: 200 }, type: 'Straight' },
        { point: { x: 600, y: 300 }, type: 'Straight' },
      ],
      sourcePoint: { x: 600, y: 100 },
      targetPoint: { x: 800, y: 300 }     
    },
    ]

new Vue({
el: '#app',
template: `
<div id="app">
    <ejs-diagram id="diagram"  :width='width' :height='height' :connectors='connectors' ></ejs-diagram>
</div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "350px",
            connectors: connectors
        }
    }

});