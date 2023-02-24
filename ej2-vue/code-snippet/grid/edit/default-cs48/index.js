
import Vue from "vue";
import { GridPlugin,Toolbar, Page } from "@syncfusion/ej2-vue-grids";
import { employeeData } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid ref='Grid' :dataSource='data' :allowPaging='true' height='280px' :rowDataBound='rowDataBound' :selectionSettings='selectionOptions' :dataBound='dataBound'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' :isPrimaryKey='true' textAlign='Right' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=120></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=80></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width=120></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data: () => {
    return {
      data: employeeData,
      selectionOptions: { type: 'Multiple' },
      selIndex: []
     };
  },
  methods: {
    rowDataBound(args){
      if (args.data['EmployeeID'] > 3) {
          this.selIndex.push(parseInt(args.row.getAttribute('aria-rowindex')));
      }
    }
    dataBound(args){
      if (this.selIndex.length) {
          this.$refs.Grid.selectRows(this.selIndex);
          this.selIndex = [];
      }
    }
  },
  provide: {
    grid: [Page]
  }

});