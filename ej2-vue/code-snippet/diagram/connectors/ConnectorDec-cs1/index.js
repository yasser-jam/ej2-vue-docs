
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let connectors = [{
        id: "connector1",
        type: 'Straight',
        // Decorator shape- circle
        sourceDecorator: {
            shape: 'Circle',
        },
        // Decorator shape - Diamond
        targetDecorator: {
            // Defines the custom shape for the connector's target decorator
            shape: 'Custom',
            //Defines the  path for the connector's target decorator
            pathData: 'M80.5,12.5 C80.5,19.127417 62.59139,24.5 40.5,24.5 C18.40861,24.5 0.5,19.127417 0.5,12.5' +
                'C0.5,5.872583 18.40861,0.5 40.5,0.5 C62.59139,0.5 80.5,5.872583 80.5,12.5 z'
        },
        sourcePoint: {
            x: 100,
            y: 100
        },
        targetPoint: {
            x: 200,
            y: 200
        }
    },
    {
        id: "connectors2",
        type: 'Straight',
        // Decorator shape - IndentedArrow
        sourceDecorator: {
            shape: 'IndentedArrow',
        },
        // Decorator shape - OutdentedArrow
        targetDecorator: {
            shape: 'OutdentedArrow',
        },
        sourcePoint: {
            x: 400,
            y: 100
        },
        targetPoint: {
            x: 300,
            y: 200
        }
    }
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