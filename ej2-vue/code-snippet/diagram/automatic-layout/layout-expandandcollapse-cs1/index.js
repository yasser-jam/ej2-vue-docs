
import Vue from 'vue';
import { DiagramPlugin, Diagram, HierarchicalTree, DataBinding, SelectorConstraints } from '@syncfusion/ej2-vue-diagrams';
import { DataManager, Query } from "@syncfusion/ej2-data";
Diagram.Inject(DataBinding, HierarchicalTree);
Vue.use(DiagramPlugin);

//Initialize data source
let data = [
    {
        'Id': 'parent1',
        'Name': 'Maria ',
        'Designation': 'Managing Director',
        'RatingColor': '#C34444'
    },
    {
        'Id': 'parent',
        'Name': ' sam',
        'Designation': 'Managing Director',
        'ReportingPerson': 'parent1',
        'RatingColor': '#C34444'
    },
    {
        'Id': 'parent3',
        'Name': ' sam geo',
        'Designation': 'Managing Director',
        'ReportingPerson': 'parent1',
        'RatingColor': '#C34444'
    },
    {
        'Id': '80',
        'Name': ' david',
        'Designation': 'Managing Director',
        'ReportingPerson': 'parent3',
        'RatingColor': '#C34444'
    },
    {
        'Id': '82',
        'Name': ' pirlo',
        'Designation': 'Managing Director',
        'ReportingPerson': 'parent',
        'RatingColor': '#C34444'
    }
];


let items = new DataManager(data, new Query().take(7));

new Vue({
    el: '#app',
    template: `
<div id="app">

    <ejs-diagram id="diagram" :width='width' :height='height' :getNodeDefaults='getNodeDefaults'
        :getConnectorDefaults='getConnectorDefaults' :layout='layout' :dataSourceSettings='dataSourceSettings'
        :snapSettings="snapSettings" :selectedItems="selectedItems"></ejs-diagram>

</div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "590px",
            snapSettings: { constraints: 0 },
            selectedItems: { constraints: ~SelectorConstraints.ResizeAll },

            //Uses layout to auto-arrange nodes on the Diagram page
            layout: {
                //Sets layout type
                type: 'HierarchicalTree',
                getLayoutInfo: (tree) => {
                    if (!tree.hasSubTree) {
                        tree.orientation = 'vertical';
                        tree.type = 'alternate';
                    }
                }
            },

            //Configures data source for Diagram
            dataSourceSettings: {
                id: 'Id',
                parentId: 'ReportingPerson',
                dataManager: items
            },

            //Sets the default properties for nodes and connectors
            getNodeDefaults: (node) => {
                node.expandIcon = {
                    height: 15,
                    width: 15,
                    shape: "Plus",
                    fill: 'lightgray',
                    offset: { x: .5, y: .85 }
                }
                node.collapseIcon = {
                    height: 15,
                    width: 15,
                    shape: "Minus",
                    offset: { x: .5, y: .85 },
                }
                node.height = 50; node.width = 50;
                return node;
            },
            getConnectorDefaults: (connector) => {
                connector.type = 'Orthogonal';
                connector.targetDecorator.shape = "None";
                return connector;
            },
        }
    },
});